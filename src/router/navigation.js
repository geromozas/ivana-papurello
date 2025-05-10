import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Face3Icon from "@mui/icons-material/Face3";

export const menuItems = [
  {
    id: "home",
    path: "/",
    title: "Inicio",
    Icon: HomeIcon,
  },
  {
    id: "aboutMe",
    path: "/about-me",
    title: "Sobre Mí",
    Icon: Face3Icon,
  },
  {
    id: "products",
    path: "/shop",
    title: "Tienda",
    Icon: StoreIcon,
  },
  {
    id: "cart",
    path: "/cart",
    title: "Carrito",
    Icon: ShoppingCartCheckoutIcon,
  },
];
