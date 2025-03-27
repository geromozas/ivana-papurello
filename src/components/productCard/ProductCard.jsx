import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function ProductCard({
  image,
  title,
  description,
  unit_price,
  //   category,
  id,
}) {
  return (
    <Card
      sx={{
        width: 400,
        marginBottom: 10,
        boxShadow: 3,
        transition: "transform 0.2s ease-in-out",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia
        sx={{ height: 200 }}
        image={image}
        title="imagen del producto"
      />

      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ height: 30 }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", height: 100 }}
        >
          {description}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ height: 10 }}
        >
          ${unit_price}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: 2 }}>
        <Link to={`/itemDetail/${id}`}>
          <Button size="small" color="secondary" variant="contained">
            Ver Detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
