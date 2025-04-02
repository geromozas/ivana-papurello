import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme.js";
import CartContextComponent from "./context/CartContext.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CartContextComponent>
          <AppRouter />
        </CartContextComponent>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
