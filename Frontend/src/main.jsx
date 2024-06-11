import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PackagesPage from "./Pages/PackagesPage.jsx";
import ServicesPage from "./Pages/ServicesPage.jsx";
import ContactusPage from "./Pages/ContactusPage.jsx";
import Layout from "./Layout.jsx";
import Signup from "./Pages/Signup.jsx";
import Error from "./Pages/Error.jsx";
import { AuthProvider } from "./store/auth.jsx";
import Logout from "./Pages/Logout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "Packages", element: <PackagesPage /> },
      { path: "Services", element: <ServicesPage /> },
      { path: "Contactus", element: <ContactusPage /> },
    ],
  },
  { path: "Signup", element: <Signup /> },
  { path: "Logout", element: <Logout /> },
  { path: "*", element: <Error /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
);

///main///
