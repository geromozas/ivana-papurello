import { useState } from "react";
import { db } from "../../../firebaseConfig";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import ProductsList from "./ProductsList";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let productsCollections = collection(db, "products");
    getDocs(productsCollections).then((res) => {
      const newArr = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      setProducts(newArr);
    });
  }, []);
  console.log(products);

  return (
    <div style={{ marginTop: "40" }}>
      <h1>Dashboard</h1>
      <ProductsList products={products} />
    </div>
  );
};

export default Dashboard;
