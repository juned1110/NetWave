// store/auth.js
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");

  const storeTokenInLS = (serverToken) => {
    console.log("serverToken", serverToken);
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  const isLoggedIn = !!token; // Declaration of isLoggedIn

  console.log("isLoggedIn", isLoggedIn); // Log after declaration

  // tackling logout functionality
  const logoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  // JWT AUTHENTICATION - to get current loggedIn user data.

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("user data", data.userData);
        setUser(data.userData);
      }
    } catch (error) {
      console.error("Error while fetching user data");
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenInLS, logoutUser, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
