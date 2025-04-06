import { Button } from "@mui/material";

const ProductCardDetail = ({
  title,
  description,
  unit_price,
  image,
  addToCart,
}) => {
  return (
    <div>
      <h1 style={{ justifySelf: "center", marginBottom: 40 }}>{title}</h1>
      <div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <img
            style={{ width: 600, height: 400, borderRadius: 10 }}
            src={image}
            alt=""
          />
          <div>
            <h2>Descripción del Curso</h2>
            <p style={{ width: 500, marginTop: 20 }}>{description}</p>{" "}
            <h3 style={{ marginTop: 50 }}>${unit_price}</h3>
            <div style={{ marginTop: 50 }}>
              <Button style={{ marginRight: 20 }} variant="contained">
                Comprar
              </Button>
              <Button variant="outlined" onClick={addToCart}>
                Añadir al carrito
              </Button>
            </div>
            <p style={{ marginTop: 20 }}>
              ¿Tenes dudas?{" "}
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
