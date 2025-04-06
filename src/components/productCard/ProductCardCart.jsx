import { Button } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";

const ProductCardCart = ({ title, unit_price, image, id }) => {
  const { deleteById } = useContext(CartContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div style={{ height: 150 }}>
        <hr style={{ marginBottom: 20, marginTop: 20 }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <img
            src={image}
            alt=""
            style={{ width: 100, marginRight: 100, borderRadius: 10 }}
          />
          <div style={{ marginRight: 100 }}>
            <h4 style={{ marginBottom: 20 }}>{title}</h4>
            <p>${unit_price}</p>
          </div>
          <Button
            variant="contained"
            style={{ height: 50 }}
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
