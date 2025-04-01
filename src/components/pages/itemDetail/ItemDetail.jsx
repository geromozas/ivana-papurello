import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import ProductCardDetail from "../../productCard/ProductCardDetail";
import { CartContext } from "../../../context/CartContext";

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const { addToCartContext } = useContext(CartContext);

  useEffect(() => {
    let refCollection = collection(db, "products");
    let refDoc = doc(refCollection, id);
    getDoc(refDoc)
      .then((res) => setProduct({ ...res.data(), id: res.id }))
      .catch((err) => console.log(err));
  }, [id]);

  // console.log(product);

  //agregar al carrito
  const addToCart = () => {
    if (product) {
      let obj = {
        ...product,
        quantity: 1,
      };
      console.log("Producto añadido al carrito", obj);
      addToCartContext(obj);
    }
  };

  return (
    <div style={{ marginTop: 40 }}>
      {product && (
        <div>
          <ProductCardDetail
            title={product.title}
            description={product.description}
            unit_price={product.unit_price} 
            image={product.image}
            addToCart={addToCart}
          />
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
