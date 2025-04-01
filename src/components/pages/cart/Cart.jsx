import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import ProductCardCart from "../../productCard/ProductCardCart";
import { Button } from "@mui/material";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div style={{ marginTop: 40 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 40,
          marginBottom: 40,
          backgroundColor: "#F4D4CF",
          opacity: 0.8,
          padding: 20,
        }}
      >
        <h1 style={{ marginBottom: 5 }}>Tu Carrito</h1>
        <p>Revisa tus productos seleccionados y procede al pago</p>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <h2>Productos en tu carrito</h2>
            {cart.map((product) => {
              return (
                <ProductCardCart
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  unit_price={product.unit_price}
                />
              );
            })}
            <a href="/shop">
              <Button style={{ marginTop: 30 }}>⬅ Continuar comprando</Button>
            </a>
          </div>
          <div style={{ height: 150 }}>
            <h2>Resumen del pedido</h2>
            <hr style={{ marginBottom: 20, marginTop: 20 }} />
            <h3 style={{ marginBottom: 20 }}>Total:</h3>
            <Button variant="outlined">Proceder al pago</Button>
            <p style={{ marginTop: 20 }}>Pago 100% seguro</p>
            <Button>Continuar comprando</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
