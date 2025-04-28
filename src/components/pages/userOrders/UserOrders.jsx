import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import "./UserOrders.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
      {myOrders.length === 0 ? (
        <div>
          <h1 style={{ marginTop: 50, marginBottom: 50, textAlign: "center" }}>
            Uups parece que todavia no tienes ninguna compra realizada
          </h1>
        </div>
      ) : (
        <div style={{ marginTop: 40 }}>
          <div className="boxTitleMyOrders">
            <h1>Mis compras</h1>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="tabla de compras">
              <TableHead>
                <TableRow>
                  {/* <TableCell align="left">ID de Orden</TableCell> */}
                  <TableCell align="left" style={{ fontSize: 25 }}>
                    Producto
                  </TableCell>
                  <TableCell align="left" style={{ fontSize: 25 }}>
                    Imagen
                  </TableCell>
                  <TableCell align="left" style={{ fontSize: 25 }}>
                    Precio
                  </TableCell>
                  <TableCell align="left" style={{ fontSize: 25 }}>
                    Total de Orden
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {myOrders.map((order) =>
                  order.items.map((product) => (
                    <TableRow key={`${order.id}-${product.id}`}>
                      {/* <TableCell align="left">{order.id}</TableCell> */}
                      <TableCell align="left" style={{ fontSize: 20 }}>
                        {product.title}
                      </TableCell>
                      <TableCell align="left">
                        <img
                          src={product.image}
                          alt="imagen producto"
                          style={{
                            width: 100,
                            height: 150,
                            borderRadius: 8,
                          }}
                        />
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 20 }}>
                        ${product.unit_price}
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 20 }}>
                        ${order.total}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
          {/* {myOrders.map((order) => {
            return (
              <div key={order.id}>
                {order?.items?.map((product) => {
                  return (
                    <div key={product.id}>
                      <h2>{product.title}</h2>
                      <img
                        src={product.image}
                        alt="imagen producto"
                        style={{ width: 100 }}
                      />
                    </div>
                  );
                })}
                <h4>El total de la orden es {order.total}</h4>
              </div>
            );
          })} */}
        </div>
      )}
    </div>
  );
};

export default UserOrders;
{
  /* <div style={{ marginTop: 40 }}>
<div className="boxTitleMyOrders">
  <h1>Mis compras</h1>
</div>
{myOrders.map((order) => {
  return (
    <div key={order.id} style={{ border: "2px solid black" }}>
      {order?.items?.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt="imagen producto" />
          </div>
        );
      })}
      <h4>El total de la orden es {order.total}</h4>
    </div>
  );
})}
</div> */
}
