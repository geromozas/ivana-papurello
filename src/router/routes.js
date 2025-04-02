import AboutMe from "../components/pages/aboutMe/AboutMe.jsx";
import Cart from "../components/pages/cart/Cart.jsx";
import Home from "../components/pages/home/Home.jsx";
import ItemDetail from "../components/pages/itemDetail/ItemDetail.jsx";
import ItemListContainer from "../components/pages/itemList/ItemListContainer.jsx";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "shop",
    path: "/shop",
    Element: ItemListContainer,
  },
  {
    id: "detail",
    path: "/itemDetail/:id",
    Element: ItemDetail,
  },
  {
    id: "aboutMe",
    path: "/about-me",
    Element: AboutMe,
  },
  {
    id: "cart",
    path: "/cart",
    Element: Cart,
  },
];
