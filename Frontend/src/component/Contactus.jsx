import React from "react";
import GoogleFontLoader from "react-google-font-loader";

const Contactus = () => {
  return (
    <>
      <GoogleFontLoader fonts={[{ font: "Play", weights: [400, 700] }]} />
      <div className="w-full h-screen flex mt-[35vw]">
        <div className="left h-[110vh] w-1/2 relative">
          <div
            className="ml-16 w-36 p-1 py-2 rounded-md bg-[#03E9F4] text-center text-black font-bold text-sm"
            style={{ fontFamily: "Play" }}
          >
            HOW IT WORKS
          </div>
          <p
            className="ml-16 mt-7 text-3xl text-black font-bold"
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
            <span className="text-white font-bold text-4xl relative">1</span>
          </div>
          <span
            className="absolute left-44 top-[26vh] font-bold"
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
            <span className="text-white font-bold text-4xl relative">2</span>
          </div>
          <span
            className="absolute left-44 top-[46vh] font-bold"
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
            className="absolute left-44 top-[66vh] font-bold"
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
            <span className="text-white font-bold text-4xl relative">4</span>
          </div>
          <span
            className="absolute left-44 top-[86vh] font-bold"
            style={{ fontFamily: "Play" }}
          >
            Installation
          </span>
          <div className="h-0.5 w-1/2 ml-20 mt-3 bg-[#03E9F4]"></div>
        </div>
        <div className="right h-[110vh] w-1/2 rounded-r-3xl mr-14 bg-[#F2F2F2] flex justify-center items-center relative">
          <div
            className="absolute top-5 right-42 text-3xl font-bold"
            style={{ fontFamily: "Play" }}
          >
            Get Free a Quote.
          </div>
          <form className="w-full max-w-md">
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
                  style={{ fontFamily: "Play" }}
                  id="name"
                  type="text"
                  placeholder="Name"
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
                  style={{ fontFamily: "Play" }}
                  id="location"
                  type="text"
                  placeholder="Location"
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
                style={{ fontFamily: "Play" }}
                id="phone"
                type="text"
                placeholder="Phone"
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
                style={{ fontFamily: "Play" }}
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="package"
                style={{ fontFamily: "Play" }}
              >
                Package
              </label>
              <select
                id="package"
                name="package"
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                style={{ fontFamily: "Play" }}
              >
                <option value="basic" style={{ fontFamily: "Play" }}>
                  Basic Package
                </option>
                <option value="premium" style={{ fontFamily: "Play" }}>
                  Premium Package
                </option>
                <option value="hype" style={{ fontFamily: "Play" }}>
                  Hype Package
                </option>
              </select>
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
                style={{ fontFamily: "Play" }}
                id="note"
                placeholder="Note"
                rows="4"
              ></textarea>
            </div>
            <button
              className="w-full bg-[#03E9F4] hover:bg-[#45d8e2] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
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

export default Contactus;
