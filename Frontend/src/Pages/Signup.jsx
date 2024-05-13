import React, { useState } from "react";
import img from "../assets/logo.png";
import GoogleFontLoader from "react-google-font-loader";

function Signup(props) {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    mobileNo: "",
    email: "",
    password: "",
  });

  //Handling Input Values
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    <>
      <GoogleFontLoader fonts={[{ font: "Play", weights: [400, 700] }]} />
      {/* {props.openModal ? ( */}
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
              <div>
                <div className="flex -mx-3 mb-5">
                  <div className="w-1/2 px-3">
                    <label
                      htmlFor="firstName"
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
                        id="firstName"
                        type="text"
                        style={{ fontFamily: "Play" }}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-[#03e9f4] outline-none"
                        name="firstName"
                        required
                        autoComplete="off"
                        value={user.firstName}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                  <div className="w-1/2 px-3">
                    <label
                      htmlFor="lastName"
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
                        id="lastName"
                        type="text"
                        style={{ fontFamily: "Play" }}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-[#03e9f4] outline-none "
                        name="lastName"
                        required
                        autoComplete="off"
                        value={user.lastName}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3 mb-5">
                  <div className="w-full px-3">
                    <label
                      htmlFor="mobileNo"
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
                        id="mobileNo"
                        type="number"
                        style={{ fontFamily: "Play" }}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-[#03e9f4] outline-none "
                        name="mobileNo"
                        required
                        autoComplete="off"
                        value={user.mobileNo}
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
                      // onClick={props.handleClose}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ) : null} */}
    </>
  );
}

export default Signup;
