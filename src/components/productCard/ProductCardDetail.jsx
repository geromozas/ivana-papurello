import { Button, useMediaQuery, useTheme } from "@mui/material";
import "./ProductCardDetail.css";

const ProductCardDetail = ({
  title,
  description,
  unit_price,
  image,
  addToCart,
}) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div>
      <h1 className="titleCardDetail">{title}</h1>
      <div>
        <div className="boxCardDetail">
          <img className="imgCardDetail" src={image} alt="" />
          <div>
            <h2>Descripción</h2>
            <p className="textDetailDescription">{description}</p>
            <h3 className="cardDetailPrice">${unit_price}</h3>
            <div className="boxButtonsDetail">
              <Button
                size={isLargeScreen ? "large" : "small"}
                style={{ marginRight: 20, marginBottom: 0 }}
                variant="contained"
              >
                Comprar
              </Button>
              <Button variant="outlined" onClick={addToCart}>
                Añadir al carrito
              </Button>
            </div>
            <p style={{ marginTop: 20 }}>
              ¿Tenes dudas?
              <a
                href={`https://wa.me/5493416041873?text=Hola%2C%20estoy%20interesado/a%20en%20este%20producto, ${title}...`}
                style={{ color: "#F4D4CF", fontWeight: "bold" }}
              >
                Contactame
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDetail;
