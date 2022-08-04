import { useState } from "react";
import { AuthContext } from "./auth-context";

export const AuthContextProvider = ({ children }) => {

  const [token, setToken] = useState(localStorage.getItem('token') || null);

  return <AuthContext.Provider value={{token, setToken}}>{children}</AuthContext.Provider>;
};
