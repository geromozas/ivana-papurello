import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ProductsList = ({ products }) => {
  const editProduct = (id) => {};

  const deleteProduct = (id) => {};

  return (
    <div style={{ marginTop: 30 }}>
      <Button variant="contained" style={{ marginBottom: 20 }}>
        Agregar Producto
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{ fontWeight: "bold" }}>
                ID
              </TableCell>
              <TableCell align="left" style={{ fontWeight: "bold" }}>
                TITULO
              </TableCell>
              <TableCell align="left" style={{ fontWeight: "bold" }}>
                DESCRIPCIÓN CORTA
              </TableCell>
              <TableCell align="left" style={{ fontWeight: "bold" }}>
                DESCRIPCIÓN
              </TableCell>
              <TableCell align="left" style={{ fontWeight: "bold" }}>
                PRECIO
              </TableCell>
              <TableCell align="left" style={{ fontWeight: "bold" }}>
                CATEGORIA
              </TableCell>
              <TableCell align="left" style={{ fontWeight: "bold" }}>
                IMAGEN
              </TableCell>
              <TableCell align="left" style={{ fontWeight: "bold" }}>
                ACCIONES
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="left">
                  {product.id}
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  {product.title}
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  {product.description_small}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  width="600px"
                  align="left"
                >
                  {product.description}
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  ${product.unit_price}
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  {product.category}
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  <img
                    src={product.image}
                    alt=""
                    style={{ width: 100, height: 100, borderRadius: 10 }}
                    align="left"
                  />
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductsList;
