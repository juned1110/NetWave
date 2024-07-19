import React, { useState } from "react";
import img from "../assets/logo.png";
import GoogleFontLoader from "react-google-font-loader";
import { useNavigate } from "react-router-dom";
import Login from "../Pages/Login";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

<<<<<<< HEAD
<<<<<<< HEAD
const URL = "https://net-wave-frontend.vercel.app/api/auth/register";
=======
const URL = "http://localhost:5000/api/auth/register";
>>>>>>> parent of 29bae9f (bug fix)
=======
const URL = "https://net-wave-nu.vercel.app/api/auth/register";
>>>>>>> parent of a20144b ( bug fix)

function Signup(props) {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  // Handling Input Values
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // Handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting user:", user);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      console.log("Response from server:", res_data.extraDetailes);

      if (response.ok) {
        // Store token in localStorage
        storeTokenInLS(res_data.token);
        setUser({
          firstname: "",
          lastname: "",
          mobile: "",
          email: "",
          password: "",
        });
        toast.success("Registration Succesfull");
        setShowModal(true);
      } else {
        // Handle non-OK responses
        toast.error(res_data.extraDetailes || "An error occurred");
      }
    } catch (error) {
      console.error("Signup Error:", error);
    }
  };

  return (
    <>
      <GoogleFontLoader fonts={[{ font: "Play", weights: [400, 700] }]} />
      <div className="min-w-screen min-h-screen bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg flex items-center justify-center px-5 py-5 z-auto">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div className="flex flex-col md:flex-row w-full">
            <div className="hidden md:block w-full md:w-1/2 bg-zinc-400 py-10 px-10">
              <div>
                <img src={img} alt="NetWave" />
              </div>
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1
                  className="font-bold text-3xl text-gray-800"
                  style={{ fontFamily: "Play" }}
                >
                  REGISTER
                </h1>
                <p style={{ fontFamily: "Play" }}>
                  Enter your information to register
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div>
                  <div className="flex -mx-3 mb-5">
                    <div className="w-1/2 px-3">
                      <label
                        htmlFor="firstname"
                        style={{ fontFamily: "Play" }}
                        className="text-xs font-semibold px-1"
                      >
                        First name
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          id="firstname"
                          type="text"
                          style={{ fontFamily: "Play" }}
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-[#03e9f4] outline-none"
                          name="firstname"
                          required
                          autoComplete="off"
                          value={user.firstname}
                          onChange={handleInput}
                        />
                      </div>
                    </div>
                    <div className="w-1/2 px-3">
                      <label
                        htmlFor="lastname"
                        style={{ fontFamily: "Play" }}
                        className="text-xs font-semibold px-1"
                      >
                        Last name
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          id="lastname"
                          type="text"
                          style={{ fontFamily: "Play" }}
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-[#03e9f4] outline-none "
                          name="lastname"
                          required
                          autoComplete="off"
                          value={user.lastname}
                          onChange={handleInput}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3 mb-5">
                    <div className="w-full px-3">
                      <label
                        htmlFor="mobile"
                        style={{ fontFamily: "Play" }}
                        className="text-xs font-semibold px-1"
                      >
                        Mobile No
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          id="mobile"
                          type="number"
                          style={{ fontFamily: "Play" }}
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-[#03e9f4] outline-none "
                          name="mobile"
                          required
                          autoComplete="off"
                          value={user.mobile}
                          onChange={handleInput}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3 mb-5">
                    <div className="w-full px-3">
                      <label
                        htmlFor="email"
                        style={{ fontFamily: "Play" }}
                        className="text-xs font-semibold px-1"
                      >
                        Email
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          id="email"
                          type="email"
                          style={{ fontFamily: "Play" }}
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-[#03e9f4] outline-none "
                          name="email"
                          required
                          autoComplete="off"
                          value={user.email}
                          onChange={handleInput}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3 mb-12">
                    <div className="w-full px-3">
                      <label
                        htmlFor="password"
                        style={{ fontFamily: "Play" }}
                        className="text-xs font-semibold px-1"
                      >
                        Password
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          id="password"
                          type="password"
                          style={{ fontFamily: "Play" }}
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-[#03e9f4] outline-none"
                          name="password"
                          required
                          autoComplete="off"
                          value={user.password}
                          onChange={handleInput}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3">
                      <button
                        type="submit"
                        style={{ fontFamily: "Play" }}
                        className="w-full focus:outline-none font-medium rounded-lg text-sm py-2.5 text-center text-[#03e9f4] text-[20px] border-2 border-[#03e9f4] hover:text-black hover:bg-[#03e9f4] my-4"
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <Login
          showModal={showModal}
          closeModal={true}
          showHideCrossBtn={false}
        />
      )}
    </>
  );
}

export default Signup;
