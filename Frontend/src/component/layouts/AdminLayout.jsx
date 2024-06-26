import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUser, FaCommentAlt, FaTasks, FaHome } from "react-icons/fa";

const AdminLayout = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav className="w-full h-[10vw] ">
            <ul className="flex justify-evenly ">
              <li className="mt-10 ml-10">
                <NavLink to="/admin/users">
                  <div className="w-14 h-10 mb-2 rounded-lg hover:bg-[#ECECEC]">
                    <FaUser className="w-10 ml-2  text-[#7D7D7D] " />
                    <p className="ml-2">Users</p>
                  </div>
                </NavLink>
              </li>
              <li className="mt-10 w-10">
                <NavLink to="/admin/Contacts">
                  <div className="w-16 h-10 rounded-lg hover:bg-[#ECECEC]">
                    <FaCommentAlt className="w-10 ml-3 text-[#7D7D7D]" />
                    Contacts
                  </div>
                </NavLink>
              </li>
              <li className="mt-10">
                <NavLink to="/services">
                  <div className="w-16 h-10 rounded-lg hover:bg-[#ECECEC]">
                    <FaTasks className="w-10 ml-3 text-[#7D7D7D]" />
                    <p className="ml-2">Services</p>
                  </div>
                </NavLink>
              </li>
              <li className="mt-10">
                <NavLink to="/">
                  <div className="w-16 h-10 rounded-lg hover:bg-[#ECECEC]">
                    <FaHome className="w-10 ml-2 text-[#7D7D7D]" />
                    <p className="ml-2">Home</p>
                  </div>
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
