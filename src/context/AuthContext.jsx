import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthContextComponent = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = (userLogged) => {
    setUser(userLogged);
    setIsLogged(true);
  };

  const logoutContext = () => {
    setUser({});
    setIsLogged(false);
  };

  let data = {
    user,
    isLogged,
    handleLogin,
    logoutContext,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContextComponent;
