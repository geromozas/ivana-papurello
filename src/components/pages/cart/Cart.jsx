import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div style={{ marginTop: 40 }}>
      <h1>Estoy en el carrito</h1>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h6>{product.title}</h6>
            <h6>{product.price}</h6>
            <h6>{product.quantity}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
