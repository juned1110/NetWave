import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  const storeTokenInLS = (serverToken) => {
    console.log("serverToken", serverToken);
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  const isLoggedIn = !!token;

  console.log("isLoggedIn", isLoggedIn);

  const logoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  const userAuthentication = async () => {
    if (!token) {
      console.log("No token available");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User data:", data.userData);
        setUser(data.userData);
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error while fetching user data", error);
    }
  };

  useEffect(() => {
    userAuthentication();
  }, [token]);

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
