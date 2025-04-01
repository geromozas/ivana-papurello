import { Button } from "@mui/material";

const ProductCardCart = ({ title, unit_price, image }) => {
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
          <img src={image} alt="" style={{ width: 100, marginRight: 100 }} />
          <div style={{ marginRight: 100 }}>
            <h4 style={{ marginBottom: 20 }}>{title}</h4>
            <p>${unit_price}</p>
          </div>
          <Button variant="contained" style={{ height: 50 }}>
            Eliminar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardCart;
