import { Button } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import "./ProductCardCart.css";

const ProductCardCart = ({ title, unit_price, image, id }) => {
  const { deleteById } = useContext(CartContext);
  return (
    <div className="boxProductCard">
      <div style={{ height: 150 }}>
        <hr style={{ marginBottom: 10, marginTop: 10 }} />
        <div className="subBoxProductCard">
          <img className="imgCart" src={image} alt="" />
          <div style={{ marginRight: 100 }}>
            <h4 style={{ marginBottom: 20 }}>{title}</h4>
            <p>${unit_price}</p>
          </div>
          <Button
            size="small"
            variant="contained"
            style={{ height: 40 }}
            onClick={() => deleteById(id)}
          >
            Eliminar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardCart;
