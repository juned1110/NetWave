import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  console.log("children", children);
  const storeTokenInLS = (serverToken) => {
    console.log("serverToken", serverToken);
    return localStorage.setItem("token", serverToken);
  };

  return (
    <AuthContext.Provider value={storeTokenInLS}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const AuthContextValue = useContext(AuthContext);
  if (!AuthContextValue) {
    throw new Error("useAuth used outside of provider");
  }
  return AuthContextValue;
};
