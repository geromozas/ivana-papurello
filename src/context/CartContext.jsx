import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCartContext = (product) => {
    let existe = cart.some((e) => e.id === product.id);
    if (existe) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Ya agregaste este curso al carrito",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
      setCart([...cart, product]);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Curso agregado al carrito",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Carrito vaciado",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const deleteById = (id) => {
    const newArr = cart.filter((elemento) => elemento.id !== id);
    localStorage.setItem("cart", JSON.stringify(newArr));
    setCart(newArr);
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
