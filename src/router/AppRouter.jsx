import { Route, Routes } from "react-router-dom";
import { routes } from "./routes.js";
import Login from "../components/pages/login/Login.jsx";
import Register from "../components/pages/register/Register.jsx";
import ForgotPassword from "../components/pages/forgotPassword/ForgotPassword.jsx";
import Layout from "../components/layout/Layout.jsx";
import Dashboard from "../components/pages/dashboard/Dashboard.jsx";
import ProtectedAdmin from "./ProtectedAdmin.jsx";
import ProtectedUsers from "./ProtectedUsers.jsx";
import Checkout from "../components/pages/checkout/Checkout.jsx";
import AllUsersOrders from "../components/pages/userOrders/AllUsersOrders.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>

      <Route element={<ProtectedUsers />}>
        <Route element={<Layout />}>
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Route>

      <Route element={<ProtectedAdmin />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>

      <Route element={<ProtectedAdmin />}>
        <Route element={<Layout />}>
          <Route path="/all-users-orders" element={<AllUsersOrders />} />
        </Route>
      </Route>

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* register  */}
      <Route path="/register" element={<Register />} />

      {/* forgot password  */}
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};

export default AppRouter;
// const AppRouter = () => {
//   return (
//     <Routes>
//       <Route element={<ProtectedUsers />}>
//         <Route element={<Layout />}>
//           {routes.map(({ id, path, Element }) => (
//             <Route key={id} path={path} element={<Element />} />
//           ))}
//         </Route>
//       </Route>

//       <Route element={<ProtectedAdmin />}>
//         <Route element={<Layout />}>
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Route>
//       </Route>

//       {/* Login */}
//       <Route path="/login" element={<Login />} />

//       {/* register  */}
//       <Route path="/register" element={<Register />} />

//       {/* forgot password  */}
//       <Route path="/forgot-password" element={<ForgotPassword />} />

//       <Route path="*" element={<h1>Not found</h1>} />
//     </Routes>
//   );
// };
