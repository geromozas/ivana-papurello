import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCartContext = (product) => {
    let existe = cart.some((e) => e.id === product.id);
    if (existe) {
      alert("Ya agregaste este producto al carrito");
    } else {
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const deleteById = (id) => {
    console.log("Estado actual del carrito: ", cart);
    const newArr = cart.filter((elemento) => elemento.id !== id);
    console.log("Nuevo carrito despues de eliminar: ", newArr);
    localStorage.setItem("cart", JSON.stringify(newArr));
    setCart(newArr);
    alert("El producto se elimino");
  };

  const getTotalPrice = () => {
    const total = cart.reduce((acc, elemento) => {
      return acc + elemento.unit_price;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addToCartContext,
    clearCart,
    deleteById,
    getTotalPrice,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
