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
      {error && <div>Error: {error}</div>}
      <section>
        <div>
          <h1>Admin User Data</h1>
        </div>
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((curUser, index) => {
                  return (
                    <tr key={index}>
                      <td>{curUser.firstname}</td>
                      <td>{curUser.lastname}</td>
                      <td>{curUser.mobile}</td>
                      <td>{curUser.email}</td>
                      <td>Edit</td>
                      <td>Delete</td>
                    </tr>
                  );
                })
              ) : (
                <div>No users found</div>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AdminUsers;
