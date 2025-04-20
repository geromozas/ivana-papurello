import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import axios from "axios";
import { Button } from "@mui/material";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  initMercadoPago(import.meta.env.VITE_PUBLIC_KEY, {
    locale: "es-AR",
  });
  console.log("MP PUBLIC KEY:", import.meta.env.VITE_PUBLIC_KEY);
  const [preferenceId, setPreferenceId] = useState(null);

  const createPreference = async () => {
    const newArray = cart.map((product) => {
      return {
        title: product.title,
        unit_price: product.unit_price,
        quantity: 1,
      };
    });

    try {
      let res = await axios.post("http://localhost:8080/create_preference", {
        items: newArray,
      });

      const { id } = res.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    } else {
      console.log("Error al realizar la compra");
    }
  };

  return (
    <div style={{ marginTop: 40 }}>
      <h1>
        <Button onClick={handleBuy}>Seleccione metodo de pago</Button>
        {preferenceId && (
          <Wallet
            initialization={{
              preferenceId: preferenceId,
              // redirectMode: "self",
            }}
          />
        )}
      </h1>
    </div>
  );
};

export default Checkout;
