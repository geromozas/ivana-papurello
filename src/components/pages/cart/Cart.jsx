import { useContext } from "react";
import { CartContext } from "../../../context/CartContext.jsx";
import ProductCardCart from "../../productCard/ProductCardCart.jsx";
import { Button } from "@mui/material";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);
  let total = getTotalPrice();
  return (
    <div style={{ marginTop: 40 }}>
      <div className="boxTitleCart">
        <h1 style={{ marginBottom: 5 }}>Tu Carrito</h1>
        <p>Revisa tus productos seleccionados y procede al pago</p>
      </div>
      <div>
        <div>
          {cart.length === 0 ? (
            <div className="emptyCart">
              <h1
                className="textEmptyCart"
                style={{ marginBottom: 50, textAlign: "center" }}
              >
                Upss... Parece que tu carrito esta vacío...
              </h1>
              <Link to="/shop">
                <Button variant="contained">Ir a la tienda</Button>
              </Link>
            </div>
          ) : (
            <div className="boxCartFull">
              <div>
                <h2>Productos en tu carrito</h2>
                {cart.map((product) => {
                  return (
                    <ProductCardCart
                      key={product.id}
                      image={product.image}
                      title={product.title}
                      unit_price={product.unit_price}
                      id={product.id}
                    />
                  );
                })}
                <a href="/shop">
                  <Button variant="outlined" style={{ marginTop: 30 }}>
                    ⬅ Continuar comprando
                  </Button>
                </a>
                <Button
                  variant="contained"
                  style={{ marginTop: 30, marginLeft: 30 }}
                  onClick={clearCart}
                >
                  Vaciar Carrito
                </Button>
              </div>
              <div className="boxTotalOrder">
                <h2>Resumen del pedido</h2>
                <hr style={{ marginBottom: 20, marginTop: 20 }} />
                <h3 style={{ marginBottom: 20 }}>Total: ${total}</h3>
                <div className="boxPay">
                  <Button variant="outlined">Proceder al pago</Button>
                  <p style={{ marginTop: 20 }}>Pago 100% seguro</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
