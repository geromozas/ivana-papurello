import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import axios from "axios";
import { Button, TextField } from "@mui/material";
import { AuthContext } from "../../../context/AuthContext";
import { useLocation } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Checkout.css";

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  initMercadoPago(import.meta.env.VITE_PUBLIC_KEY, {
    locale: "es-AR",
  });

  const [preferenceId, setPreferenceId] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [orderId, setOrderId] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("status");

  useEffect(() => {
    let order = JSON.parse(localStorage.getItem("order"));
    if (paramValue === "approved" && order) {
      setIsLoading(true);

      let ordersCollections = collection(db, "orders");
      addDoc(ordersCollections, { ...order, date: serverTimestamp() })
        .then((res) => {
          setOrderId(res.id);
          return sendCourseEmail(order);
        })
        .catch((error) => {
          console.log("Error al guardar la orden: ", error);
          setIsLoading(false);
        });

      localStorage.removeItem("order");
      try {
        clearCart();
      } catch (error) {
        console.log("Error al limpiar el carrito", error);
      }
    }
  }, [paramValue]);

  const sendCourseEmail = async (order) => {
    console.log("Orden a enviar por correo:", order);
    if (!order?.items || !Array.isArray(order.items)) {
      console.error("La orden no contiene items válidos:", order);
      setEmailError("No se pudo enviar el correo. Orden inválida.");
      setIsLoading(false);
      return;
    }

    try {
      // Enviamos los correos para cada producto con su PDF asociado
      const coursePromises = order.items.map((product) => {
        return axios.post(
          "https://backend-ivana-papurello.vercel.app/api/email/send-course-email",
          {
            email: order.email || user.email,
            courseName: product.title,
            pdfUrl: product.pdf,
          }
        );
      });

      await Promise.allSettled(coursePromises);
      setEmailSent(true);
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      setEmailError(
        "No se pudo enviar el correo con el curso. Por favor contacta a soporte."
      );
    } finally {
      setIsLoading(false);
    }
  };

  let total = getTotalPrice();

  const createPreference = async () => {
    const newArray = cart.map((product) => {
      return {
        title: product.title,
        unit_price: product.unit_price,
        pdfUrl: product.pdf,
        quantity: 1,
      };
    });

    try {
      let res = await axios.post(
        "https://backend-ivana-papurello.vercel.app/create_preference",
        {
          items: newArray,
        }
      );

      const { id } = res.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    if (!cart.length) {
      console.warn("El carrito está vacío. No se puede crear la orden.");
      return;
    }
    let order = {
      name: userData.name,
      lastName: userData.lastName,
      phone: userData.phone,
      items: cart,
      total: total,
      email: user.email,
    };
    localStorage.setItem("order", JSON.stringify(order));
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    } else {
      console.log("Error al realizar la compra");
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ marginTop: 40 }}>
      {!orderId ? (
        <>
          <div
            className="dataClient"
            style={{ display: "flex", flexDirection: "column", gap: 10 }}
          >
            <TextField
              name="name"
              variant="outlined"
              label="Nombre"
              onChange={handleChange}
            />
            <TextField
              name="lastName"
              variant="outlined"
              label="Apellido"
              onChange={handleChange}
            />
            <TextField
              name="phone"
              variant="outlined"
              label="Telefono"
              onChange={handleChange}
            />
          </div>
          <Button onClick={handleBuy}>Seleccione metodo de pago</Button>
        </>
      ) : (
        <>
          <div className="successfulPurchase">
            <h2>El pago se realizo con exito</h2>
            <h4>Su orden de compra es {orderId}</h4>
            <p>
              Gracias por su compra. Le hemos enviado el/los curso/s a su correo
              electrónico. Por favor, revise también su carpeta de correo no
              deseado o spam en caso de no encontrar el mensaje en su bandeja de
              entrada.
            </p>
          </div>
        </>
      )}

      {preferenceId && (
        <Wallet
          initialization={{
            preferenceId: preferenceId,
          }}
        />
      )}
    </div>
  );
};

export default Checkout;
// const { handleSubmit, handleChange, errors } = useFormik({
//   initialValues: {
//     name: "",
//     lastName: "",
//     phone: "",
//   },
//   onSubmit: async (data) => {
//     try {

//     } catch (error) {
//       console.log(error);
//     }
//   },
// });
