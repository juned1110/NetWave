import React, { useState } from "react";
import GoogleFontLoader from "react-google-font-loader";
import { useAuth } from "../store/auth";

const ContactusPage = () => {
  const [contact, setContact] = useState({
    name: "",
    location: "",
    phone: "",
    email: "",
    note: "",
  });

  const [userData, setUserData] = useState(true);

  const { user } = useAuth();

  if (userData && user) {
    setContact({
      name: [user.firstname],
      location: "",
      phone: user.mobile,
      email: user.email,
      note: "",
    });

    setUserData(false);
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
  };

  return (
    <>
      <GoogleFontLoader fonts={[{ font: "Play", weights: [400, 700] }]} />
      <div className="w-full h-[115vh] flex p-28 pt-5 bg-gradient-to-r from-[#ffffff] to-[#ECE9E6]">
        <div
          className="left h-[110vh] w-1/2 relative rounded-l-3xl"
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          }}
        >
          <div
            className="ml-16 w-36 p-1 py-2 rounded-md bg-[#03E9F4] text-center text-black font-bold text-sm mt-10"
            style={{ fontFamily: "Play" }}
          >
            HOW IT WORKS
          </div>
          <p
            className="ml-16 mt-1 text-3xl text-black font-bold"
            style={{ fontFamily: "Play" }}
          >
            Simple Process to Apply Service.
          </p>

          {/* Step 1 */}
          <p
            className="ml-[102px] mb-1 text-sm mt-1 text-[#03E9F4] relative"
            style={{ fontFamily: "Play" }}
          >
            STEP
          </p>
          <div
            className="rounded-full h-20 w-20 ml-20 bg-blue-900 flex justify-center items-center"
            style={{
              background: "linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
              backgroundImage:
                "-moz-linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
              backgroundImage:
                "-webkit-linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
              backgroundImage:
                "linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
              filter:
                "progid:DXImageTransform.Microsoft.gradient( startColorstr='#0061FF', endColorstr='#60EFFF',GradientType=1)",
            }}
          >
            <span
              className="text-white font-bold text-4xl relative"
              style={{ fontFamily: "Play" }}
            >
              1
            </span>
          </div>
          <span
            className="absolute left-44 top-[29vh] font-bold"
            style={{ fontFamily: "Play" }}
          >
            Check Coverage Availability
          </span>
          <div className="h-0.5 w-1/2 ml-20 mt-3 bg-[#03E9F4]"></div>

          {/* Step 2 */}
          <p
            className="ml-[102px] mb-1 text-sm mt-1 text-[#03E9F4] relative"
            style={{ fontFamily: "Play" }}
          >
            STEP
          </p>
          <div
            className="rounded-full h-20 w-20 ml-20 bg-blue-900 flex justify-center items-center"
            style={{
              background: "linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
              backgroundImage:
                "-moz-linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
              backgroundImage:
                "-webkit-linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
              backgroundImage:
                "linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
              filter:
                "progid:DXImageTransform.Microsoft.gradient( startColorstr='#0061FF', endColorstr='#60EFFF',GradientType=1)",
            }}
          >
            <span
              className="text-white font-bold text-4xl relative"
              style={{ fontFamily: "Play" }}
            >
              2
            </span>
          </div>
          <span
            className="absolute left-44 top-[49vh] font-bold"
            style={{ fontFamily: "Play" }}
          >
            Survey Location
          </span>
          <div className="h-0.5 w-1/2 ml-20 mt-3 bg-[#03E9F4]"></div>

          {/* Step 3 */}
          <p
            className="ml-[102px] mb-1 text-sm mt-1 text-[#03E9F4] relative"
            style={{ fontFamily: "Play" }}
          >
            STEP
          </p>
          <div
            className="rounded-full h-20 w-20 ml-20 bg-blue-900 flex justify-center items-center"
            style={{
              background: "linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
              backgroundImage:
                "-moz-linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
              backgroundImage:
                "-webkit-linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
              backgroundImage:
                "linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
              filter:
                "progid:DXImageTransform.Microsoft.gradient( startColorstr='#0061FF', endColorstr='#60EFFF',GradientType=1)",
            }}
          >
            <span className="text-white font-bold text-4xl relative">3</span>
          </div>
          <span
            className="absolute left-44 top-[69vh] font-bold"
            style={{ fontFamily: "Play" }}
          >
            Apply Contract
          </span>
          <div className="h-0.5 w-1/2 ml-20 mt-3 bg-[#03E9F4]"></div>

          {/* Step 4 */}
          <p
            className="ml-[102px] mb-1 text-sm mt-1 text-[#03E9F4] relative"
            style={{ fontFamily: "Play" }}
          >
            STEP
          </p>
          <div
            className="rounded-full h-20 w-20 ml-20 bg-blue-900 flex justify-center items-center"
            style={{
              background: "linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
              backgroundImage:
                "-moz-linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
              backgroundImage:
                "-webkit-linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
              backgroundImage:
                "linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
              filter:
                "progid:DXImageTransform.Microsoft.gradient( startColorstr='#0061FF', endColorstr='#60EFFF',GradientType=1)",
            }}
          >
            <span
              className="text-white font-bold text-4xl relative"
              style={{ fontFamily: "Play" }}
            >
              4
            </span>
          </div>
          <span
            className="absolute left-44 top-[89vh] font-bold"
            style={{ fontFamily: "Play" }}
          >
            Installation
          </span>
          <div className="h-0.5 w-1/2 ml-20 mt-3 bg-[#03E9F4]"></div>
        </div>
        <div
          className="right h-[110vh] w-1/2 rounded-r-3xl mr-14 bg-[#F2F2F2] flex justify-center items-center relative"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
          }}
        >
          <div
            className="absolute top-5 right-42 text-3xl font-bold"
            style={{ fontFamily: "Play" }}
          >
            Get Free a Quote.
          </div>
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="mb-4 mt-10 flex justify-between">
              <div className="w-1/2 mr-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                  style={{ fontFamily: "Play" }}
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
                  type="text"
                  value={contact.name}
                  onChange={handleInput}
                  placeholder="Name"
                  style={{ fontFamily: "Play" }}
                />
              </div>
              <div className="w-1/2 ml-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="location"
                  style={{ fontFamily: "Play" }}
                >
                  Location
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="location"
                  name="location"
                  type="text"
                  value={contact.location}
                  onChange={handleInput}
                  placeholder="Location"
                  style={{ fontFamily: "Play" }}
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
                style={{ fontFamily: "Play" }}
              >
                Phone
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                name="phone"
                type="text"
                value={contact.phone}
                onChange={handleInput}
                placeholder="Phone"
                style={{ fontFamily: "Play" }}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
                style={{ fontFamily: "Play" }}
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                value={contact.email}
                onChange={handleInput}
                placeholder="Email"
                style={{ fontFamily: "Play" }}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="note"
                style={{ fontFamily: "Play" }}
              >
                Note
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="note"
                name="note"
                type="text"
                value={contact.note}
                onChange={handleInput}
                placeholder="Note"
                rows="4"
                style={{ fontFamily: "Play" }}
              ></textarea>
            </div>
            <button
              className="w-full bg-[#03E9F4] hover:bg-[#45d8e2] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              style={{ fontFamily: "Play" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactusPage;
