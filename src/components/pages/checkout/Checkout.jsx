import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import axios from "axios";
import { Button, TextField } from "@mui/material";
import { AuthContext } from "../../../context/AuthContext";
import { useLocation } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

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

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("status");

  useEffect(() => {
    let order = JSON.parse(localStorage.getItem("order"));
    if (paramValue === "approved") {
      let ordersCollections = collection(db, "orders");
      addDoc(ordersCollections, { ...order, date: serverTimestamp() }).then(
        (res) => {
          setOrderId(res.id);
        }
      );

      localStorage.removeItem("order");
      clearCart().catch((error) => console.log(error));
    }
  }, [paramValue]);

  let total = getTotalPrice();

  const createPreference = async () => {
    const newArray = cart.map((product) => {
      return {
        title: product.title,
        unit_price: product.unit_price,
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

  //formik hacer
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h4>El pago se realizo con exito</h4>
            <h4>Su orden de compra es {orderId}</h4>
          </div>
        </>
      )}
      {preferenceId && (
        <Wallet
          initialization={{
            preferenceId: preferenceId,
            redirectMode: "self",
          }}
        />
      )}
    </div>
  );
};

export default Checkout;
