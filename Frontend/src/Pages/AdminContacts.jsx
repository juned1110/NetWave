import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const { AuthorizationToken } = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      const data = await response.json();
      console.log("contact data", data);
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <section className="admin-contact p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Admin Contact Data
      </h1>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactData.map((curContactData, index) => {
          const { username, email, message, location, phone } = curContactData;
          return (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
            >
              <p className="text-xl font-semibold text-gray-700 mb-2 capitalize">
                {username}
              </p>
              <p className="text-gray-600 mb-2 font-medium">
                <span className="font-semibold">Phone:</span> {phone}
              </p>
              <p className="text-gray-600 mb-2 font-medium">
                <span className="font-semibold">Location:</span> {location}
              </p>
              <p className="text-gray-600 mb-2 font-medium">
                <span className="font-semibold">Email:</span> {email}
              </p>
              <p className="text-gray-500 mb-4 capitalize font-medium">
                <span className="font-semibold">Message:</span> {message}
              </p>
              <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300">
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AdminContacts;
