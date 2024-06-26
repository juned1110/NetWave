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
      {users.length > 0 ? (
        users.map((curUser, index) => {
          return <h1 key={index}>{curUser.firstname}</h1>;
        })
      ) : (
        <div>No users found</div>
      )}
    </>
  );
};

export default AdminUsers;
