import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUser, FaCommentAlt, FaTasks, FaHome } from "react-icons/fa";

const AdminLayout = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users">
                  <FaUser /> Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/Contacts">
                  {" "}
                  <FaCommentAlt />
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink to="/services">
                  <FaTasks />
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  {" "}
                  <FaHome />
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default AdminLayout;
