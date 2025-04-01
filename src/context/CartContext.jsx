import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCartContext = (product) => {
    let existe = cart.some((e) => e.id === product.id);
    if (existe) {
      alert("Ya agregaste este producto al carrito");
    } else {
      setCart([...cart, product]);
    }
  };

  let data = {
    cart,
    addToCartContext,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
