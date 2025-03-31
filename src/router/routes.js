import AboutMe from "../components/pages/aboutMe/AboutMe";
import Cart from "../components/pages/cart/Cart";
import Home from "../components/pages/home/Home";
import ItemDetail from "../components/pages/itemDetail/ItemDetail";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";

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
