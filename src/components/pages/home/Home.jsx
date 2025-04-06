import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig.js";
import { getDocs, collection, limit, query } from "firebase/firestore";
import ProductCard from "../../productCard/ProductCard.jsx";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let refCollection = collection(db, "products");

    let productQuery = query(refCollection, limit(3));

    getDocs(productQuery)
      .then((res) => {
        let newArray = res.docs.map((product) => {
          return { ...product.data(), id: product.id };
        });
        setProducts(newArray);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(products);

  return (
    <div id="boxHome">
      <div className="homeStart">
        <div className="boxTextHome">
          <h1 className="titleHome">
            Transforma tu vida con nuestros cursos de sanación y bienestar
          </h1>
          <p className="textInitialHome">
            Descubre el poder de la bideocodificación, sanación energética y
            liberación emocional para alcanzar tu máximo potencial.
          </p>
          <div className="buttonsHome">
            <Button
              size="small"
              variant="contained"
              style={{ marginRight: 20 }}
            >
              Explorar cursos
            </Button>
            <Button size="small" variant="contained">
              Conoce más
            </Button>
          </div>
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ivana-papurello.firebasestorage.app/o/placeholder.jpg?alt=media&token=7097dce0-42fb-4ceb-93f1-1f11ca1fb7ee"
          alt=""
          className="imgHome"
        />
      </div>
      <div
        style={{
          marginTop: 50,
          backgroundColor: "#F4D4CF",
          borderRadius: "10px",
        }}
      >
        <h1
          className="outStanding"
          style={{
            justifySelf: "center",
            padding: 30,
          }}
        >
          Lo más destacado
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                unit_price={product.unit_price}
                id={product.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
