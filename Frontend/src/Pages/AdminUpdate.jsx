import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const AdminUpdate = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
  });

  const params = useParams();
  const navigate = useNavigate();
  const { AuthorizationToken } = useAuth();

  // Get single user data
  const getSingleUserData = async () => {
    try {
      const response = await fetch(
<<<<<<< HEAD
        `http://localhost:5000/api/admin/users/${params.id}`,

=======
<<<<<<< HEAD
<<<<<<< HEAD
        `https://net-wave-frontend.vercel.app/api/admin/users/${params.id}`,
=======
        `http://localhost:5000/api/admin/users/${params.id}`,
>>>>>>> parent of 29bae9f (bug fix)
=======
        `https://net-wave-nu.vercel.app/api/admin/users/${params.id}`,
>>>>>>> parent of a20144b ( bug fix)
>>>>>>> d156d70335fc43b1d8628ea8ff14b8f38cb86b36
        {
          method: "GET",
          headers: {
            Authorization: AuthorizationToken,
          },
        }
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  // Update the data dynamically
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
<<<<<<< HEAD
        `http://localhost:5000/api/admin/users/update/${params.id}`,
=======
<<<<<<< HEAD
<<<<<<< HEAD
        `https://net-wave-frontend.vercel.app/api/admin/users/update/${params.id}`,
=======
        `http://localhost:5000/api/admin/users/update/${params.id}`,
>>>>>>> parent of 29bae9f (bug fix)
=======
        `https://net-wave-nu.vercel.app/api/admin/users/update/${params.id}`,
>>>>>>> parent of a20144b ( bug fix)
>>>>>>> d156d70335fc43b1d8628ea8ff14b8f38cb86b36
        {
          method: "PATCH",
          headers: {
            Authorization: AuthorizationToken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success("Update successfully");
        navigate("/admin/users");
      } else {
        toast.error("Not Updated");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <div className="bg-white shadow-md rounded-lg p-8 w-1/2 mx-auto">
          <h1 className="text-4xl font-semibold text-center text-gray-800 mb-6">
            Update User Data
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="firstname"
                className="block text-lg font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                autoComplete="off"
                value={data.firstname}
                onChange={handleInput}
                required
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="lastname"
                className="block text-lg font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                autoComplete="off"
                value={data.lastname}
                onChange={handleInput}
                required
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="block text-lg font-medium text-gray-700"
              >
                Mobile
              </label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                autoComplete="off"
                value={data.mobile}
                onChange={handleInput}
                required
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                value={data.email}
                onChange={handleInput}
                required
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition duration-300"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdminUpdate;
