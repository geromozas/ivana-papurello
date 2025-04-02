import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig.js";
import { getDocs, collection } from "firebase/firestore";
import ProductCard from "../../productCard/ProductCard.jsx";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let refCollection = collection(db, "products");
    getDocs(refCollection)
      .then((res) => {
        let newArray = res.docs.map((product) => {
          return { ...product.data(), id: product.id };
        });
        setProducts(newArray);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 40,
          marginBottom: 40,
          backgroundColor: "#F4D4CF",
          opacity: 0.8,
          padding: 20,
        }}
      >
        <h1 style={{ marginBottom: 5 }}>Nuestros Servicios</h1>
        <p>
          Descubre nuestra amplia gama de cursos, talleres y formaciones
          diseñados para tu crecimiento personal y bienestar integral.
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "800px",
          margin: "0 auto",
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
  );
};

export default ItemListContainer;
