import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  console.log("params single user", params);

  const { AuthorizationToken } = useAuth();

  //get single user data

  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: AuthorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log(`users single data: ${data}`);
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

  //to update the data dynamically
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${params.id}`,
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
        toast.success("Update succesfully");
      } else {
        toast.error("Not Updated");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="section-contact">
      <div className="contact-content">
        <h1 className="main-heading">Update User Data</h1>
      </div>
      <div>
        <section>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstname">firstname</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                autoComplete="off"
                value={data.firstname}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label htmlFor="lastname">
                <div>
                  <label htmlFor="lastname">lastname</label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    autoComplete="off"
                    value={data.lastname}
                    onChange={handleInput}
                    required
                  />
                </div>
              </label>
            </div>

            <div>
              <label htmlFor="mobile">
                <div>
                  <label htmlFor="mobile">mobile</label>
                  <input
                    type="text"
                    name="mobile"
                    id="mobile"
                    autoComplete="off"
                    value={data.mobile}
                    onChange={handleInput}
                    required
                  />
                </div>
              </label>
            </div>

            <div>
              <label htmlFor="email">
                <div>
                  <label htmlFor="email">email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={data.email}
                    onChange={handleInput}
                    required
                  />
                </div>
              </label>
            </div>
            <div>
              <button type="submit">Update</button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};

export default AdminUpdate;
