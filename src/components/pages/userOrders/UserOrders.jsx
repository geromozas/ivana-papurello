import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const UserOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const ordersCollections = collection(db, "orders");
    let ordersFiltered = query(
      ordersCollections,
      where("email", "==", user.email)
    );
    getDocs(ordersFiltered)
      .then((res) => {
        const newArr = res.docs.map((order) => {
          return { ...order.data(), id: order.id };
        });
        setMyOrders(newArr);
      })
      .catch((error) => console.log(error));
  }, [user.email]);

  return (
    <div>
      <h1>Estoy en mi ordenes</h1>
      {myOrders.map((order) => {
        return (
          <div key={order.id} style={{ border: "2px solid black" }}>
            {order?.items?.map((product) => {
              return (
                <div key={product.id}>
                  <h2>{product.title}</h2>
                  <h3>{product.iamge}</h3>
                </div>
              );
            })}
            <h4>El total de la orden es {order.total}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default UserOrders;
