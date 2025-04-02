import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig.js";
import { getDocs, collection, limit, query } from "firebase/firestore";
import ProductCard from "../../productCard/ProductCard.jsx";

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
    <div style={{ marginTop: 100 }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ marginTop: 50 }}>
          <h1 style={{ width: 600 }}>
            Transforma tu vida con nuestros cursos de sanación y bienestar
          </h1>
          <p style={{ width: 600 }}>
            Descubre el poder de la bideocodificación, sanación energética y
            liberación emocional para alcanzar tu máximo potencial.
          </p>
          <div style={{ marginTop: 20 }}>
            <Button variant="contained" style={{ marginRight: 20 }}>
              Explorar cursos
            </Button>
            <Button variant="contained">Conoce más</Button>
          </div>
        </div>
        <img
          style={{ width: 600, height: 400, borderRadius: 10 }}
          src="https://firebasestorage.googleapis.com/v0/b/ivana-papurello.firebasestorage.app/o/placeholder.jpg?alt=media&token=7097dce0-42fb-4ceb-93f1-1f11ca1fb7ee"
          alt=""
        />
      </div>
      <div
        style={{
          marginTop: 50,
          backgroundColor: "#F4D4CF",
        }}
      >
        <h1
          style={{
            justifySelf: "center",
            padding: 30,
          }}
        >
          Lo más destacado
        </h1>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
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
