import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const { AuthorizationToken } = useAuth();

  const getAllUsersData = async () => {
    try {
      if (!AuthorizationToken) {
        throw new Error("Authorization token is missing");
      }

      console.log("AuthorizationToken:", AuthorizationToken);

      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("users", data);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <>
      {error && <div className="text-red-500 text-center">{error}</div>}
      <section className="bg-gray-100 py-10 mt-0 h-screen">
        <div className="w-full h-[15vh] flex justify-center items-center mb-6">
          <h1 className="text-6xl text-center font-semibold text-gray-800">
            Admin User Data
          </h1>
        </div>
        <div className="container mx-auto">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-zinc-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Firstname</th>
                  <th className="py-3 px-4 text-left">Lastname</th>
                  <th className="py-3 px-4 text-left">Mobile</th>
                  <th className="py-3 px-4 text-left">Email</th>
                  <th className="py-3 px-4 text-left">Update</th>
                  <th className="py-3 px-4 text-left">Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((curUser, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">{curUser.firstname}</td>
                      <td className="py-3 px-4">{curUser.lastname}</td>
                      <td className="py-3 px-4">{curUser.mobile}</td>
                      <td className="py-3 px-4">{curUser.email}</td>
                      <td className="py-3 px-4">
                        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
                          Edit
                        </button>
                      </td>
                      <td className="py-3 px-4">
                        <button className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-3 px-4">
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminUsers;
