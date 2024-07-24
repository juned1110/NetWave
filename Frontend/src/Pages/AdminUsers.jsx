import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;

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

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/delete/${id}`,

        {
          method: "DELETE",
          headers: {
            Authorization: AuthorizationToken,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      getAllUsersData();
    } catch (error) {
      console.error("Error deleting user:", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {error && <div className="text-red-500 text-center">{error}</div>}
      <section className="bg-gray-100 py-10">
        <div className="w-full h-[15vh] flex justify-center items-center mb-6">
          <h1 className="text-6xl text-center font-semibold text-gray-800">
            Admin User Data
          </h1>
        </div>
        <div className="container mx-auto">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-3 px-6 text-left">Firstname</th>
                  <th className="py-3 px-6 text-left">Lastname</th>
                  <th className="py-3 px-6 text-left">Mobile</th>
                  <th className="py-3 px-6 text-left">Email</th>
                  <th className="py-3 px-6 text-left">Update</th>
                  <th className="py-3 px-6 text-left">Delete</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.length > 0 ? (
                  currentUsers.map((curUser, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-gray-100 transition duration-300"
                    >
                      <td className="py-3 px-6">{curUser.firstname}</td>
                      <td className="py-3 px-6">{curUser.lastname}</td>
                      <td className="py-3 px-6">{curUser.mobile}</td>
                      <td className="py-3 px-6">{curUser.email}</td>
                      <td className="py-3 px-6">
                        <Link to={`/admin/users/${curUser._id}/edit`}>
                          <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-700 transition duration-300">
                            Edit
                          </button>
                        </Link>
                      </td>
                      <td className="py-3 px-6">
                        <button
                          className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-700 transition duration-300"
                          onClick={() => deleteUser(curUser._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-3 px-6">
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-500 text-white rounded disabled:bg-gray-300"
              >
                Previous
              </button>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={indexOfLastUser >= users.length}
                className="px-4 py-2 bg-gray-500 text-white rounded disabled:bg-gray-300"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminUsers;
