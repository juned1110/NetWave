import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PackagesPage from "./Pages/PackagesPage.jsx";
import ServicesPage from "./Pages/ServicesPage.jsx";
import ContactusPage from "./Pages/ContactusPage.jsx";
import Layout from "./Layout.jsx";
import Signup from "./Pages/Signup.jsx";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

///main///
