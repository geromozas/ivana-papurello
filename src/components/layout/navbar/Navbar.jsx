import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShopIcon from "@mui/icons-material/Shop";

import { Link, Outlet, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { menuItems } from "../../../router/navigation.js";
import { logOut } from "../../../firebaseConfig.js";
import { AuthContext } from "../../../context/AuthContext.jsx";
import "./Navbar.css";

const drawerWidth = 200;

function Navbar(props) {
  const { logoutContext, user, isLogged } = useContext(AuthContext);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const rolAdmin = import.meta.env.VITE_ROL_ADMIM;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogOut = () => {
    logOut();
    logoutContext();
    navigate("/login");
  };

  const drawer = (
    <div>
      <Toolbar />

      <List>
        {menuItems.map(({ id, path, title, Icon }) => {
          return (
            <Link key={id} to={path}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Icon sx={{ color: "black" }} />
                  </ListItemIcon>
                  <ListItemText primary={title} sx={{ color: "black" }} />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}

        {user.rol === rolAdmin && (
          <Link to={"/all-users-orders"}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ShoppingBagIcon sx={{ color: "black" }} />
                </ListItemIcon>
                <ListItemText
                  primary={"Compras clientes"}
                  sx={{ color: "black" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        )}

        {user.rol === rolAdmin && (
          <Link to={"/dashboard"}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon sx={{ color: "black" }} />
                </ListItemIcon>
                <ListItemText primary={"Dashboard"} sx={{ color: "black" }} />
              </ListItemButton>
            </ListItem>
          </Link>
        )}

        {isLogged ? (
          <div>
            <Link to={"/user-orders"}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ShopIcon sx={{ color: "black" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Mis compras"}
                    sx={{ color: "black" }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
            <ListItem disablePadding>
              <ListItemButton onClick={handleLogOut}>
                <ListItemIcon>
                  <LogoutIcon sx={{ color: "black" }} />
                </ListItemIcon>
                <ListItemText
                  primary={"Cerrar sesion"}
                  sx={{ color: "black" }}
                />
              </ListItemButton>
            </ListItem>
          </div>
        ) : (
          <Link to={"/login"}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon sx={{ color: "black" }} />
                </ListItemIcon>
                <ListItemText
                  primary={"Iniciar sesión"}
                  sx={{ color: "black" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          backgroundColor: "primary",
        }}
      >
        <Toolbar
          sx={{
            gap: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="/" style={{ color: "black" }}>
            <img
              style={{ width: 100, padding: "5px", borderRadius: "10px" }}
              src="https://firebasestorage.googleapis.com/v0/b/ivana-papurello.firebasestorage.app/o/ivana-papurello-logo.jpeg?alt=media&token=b3d2e5fd-2c34-4507-a008-b11927a126c3"
              alt=""
            />
          </Link>
          <IconButton
            color="secondary.primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon color="secondary.primary" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav" aria-label="mailbox folders">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor={"right"}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#F4D4CF",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
          width: "100%",
          minHeight: "100vh",
          px: 2,
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
}

export default Navbar;
