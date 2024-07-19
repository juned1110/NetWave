import React, { useRef, useState } from "react";
import img from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const URL = "https://net-wave-frontend.vercel.app";
// https://net-wave-frontend.vercel.app/api/auth/login

const Login = (props) => {
  const loginImgRef = useRef();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const res_data = await response.json();
        storeTokenInLS(res_data.token);
        setUser({
          email: "",
          password: "",
        });
        props.closeModal();
        toast.success("Login Succesfull");
        navigate("/");
      } else {
        toast.error("Invalid Credential");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useGSAP(() => {
    gsap.to(loginImgRef.current, {
      rotate: 720,
      duration: 5,
      delay: 1,
      ease: "circ.inOut",
      repeat: -1,
    });
  });

  return (
    <>
      {/* <GoogleFontLoader fonts={[{ font: "Play", weights: [400, 700] }]} /> */}
      {props.showModal ? (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg z-40">
          <div
            id="authentication-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="overflow-y-auto overflow-x-hidden fixed flex z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            {/* Left side div with image */}
            <div className="h-[70vh] w-[70vh] bg-zinc-400 py-10 px-10 rounded-l-lg">
              <img ref={loginImgRef} src={img} alt="Login Logo" />
            </div>

            {/* Right side modal content */}
            <div className="relative h-[70vh] w-[70vh]">
              <div className="relative bg-[#f1f1f1] shadow h-[70vh] rounded-r-xl">
                <div className="flex items-center justify-between md:p-5 border-b rounded-t">
                  <h3
                    className="text-xl font-semibold text-gray-900"
                    style={{ fontFamily: "Play" }}
                  >
                    Sign in to our platform
                  </h3>
                  {props.showHideCrossBtn && (
                    <button
                      type="button"
                      className="end-2.5 text-gray-900 bg-transparent hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-[#03e9f4]"
                      data-modal-hide="authentication-modal"
                      onClick={props.closeModal}
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only" style={{ fontFamily: "Play" }}>
                        Close modal
                      </span>
                    </button>
                  )}
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="p-4 md:p-5">
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="email"
                          style={{ fontFamily: "Play" }}
                          className="block mb-2 text-sm font-medium text-[gray-300]"
                        >
                          Your email / Mobile No.
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          style={{ fontFamily: "Play" }}
                          autoComplete="off"
                          className="bg-grey-300 border-2 border-[#03e9f4] text-grey-900 text-sm rounded-lg block w-full p-2.5 focus:bg-[#cfd1d6]"
                          placeholder="mobile no. / name@company.com"
                          value={user.email}
                          onChange={handleInput}
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="password"
                          style={{ fontFamily: "Play" }}
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Your password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="••••••••"
                          style={{ fontFamily: "Play" }}
                          className="bg-grey-300 border-2 border-[#03e9f4] text-grey-900 text-sm rounded-lg focus:bg-[#cfd1d6] block w-full p-2.5"
                          value={user.password}
                          onChange={handleInput}
                          required
                        />
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="remember"
                              type="checkbox"
                              value=""
                              className="w-4 h-4 border border-black rounded bg-[#03e9f4]"
                            />
                          </div>
                          <label
                            htmlFor="remember"
                            className="ms-2 text-sm font-medium text-gray-900"
                            style={{ fontFamily: "Play" }}
                          >
                            Remember me
                          </label>
                        </div>
                        <a
                          href="#"
                          className="text-sm text-blue-700 hover:underline"
                          style={{ fontFamily: "Play" }}
                        >
                          Lost Password?
                        </a>
                      </div>
                      <button
                        type="submit"
                        className="w-full focus:ring-4 focus:outline-none font-medium rounded-lg text-sm py-1 text-center text-[#03e9f4] text-[20px] border-2 border-[#03e9f4] hover:text-black hover:bg-[#03e9f4] my-4"
                        style={{ fontFamily: "Play" }}
                      >
                        Login to your account
                      </button>
                      <div
                        className="text-sm font-medium text-gray-900"
                        style={{ fontFamily: "Play" }}
                      >
                        Not registered?{" "}
                        <NavLink
                          to="/Signup"
                          className="text-blue-700 hover:underline"
                          style={{ fontFamily: "Play" }}
                        >
                          Create account
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Login;
