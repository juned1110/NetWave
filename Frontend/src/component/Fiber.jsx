import React from "react";
import img1 from "../assets/team.png";
import img2 from "../assets/dad.png";
import img3 from "../assets/support.png";
import GoogleFontLoader from "react-google-font-loader";

const Fiber = () => {
  return (
    <>
      <GoogleFontLoader fonts={[{ font: "Play", weights: [400, 700] }]} />
      <div className="w-full h-screen relative flex flex-col items-center -mt-[50vh] md:mt-0">
        <div
          className="absolute left-[50%] transform -translate-x-1/2 top-32 w-36 p-1 py-2 rounded-md bg-[#03E9F4] text-center text-black font-bold text-sm"
          style={{ fontFamily: "Play" }}
        >
          WHY CHOOSE US
        </div>
        <p
          className="absolute left-[50%] transform -translate-x-1/2 top-48 text-black text-3xl font-bold text-center"
          style={{ fontFamily: "Play" }}
        >
          There’s fast, and then there’s fiber fast
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-72 max-w-7xl mx-auto px-4">
          <div
            className="card1 relative rounded-lg w-full h-[65vh] border-2"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.17) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px 2px 4px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 10px 10px",
            }}
          >
            <img src={img1} className="h-[45vh] w-full rounded-t-lg" />
            <div className="p-6">
              <h5
                className="mb-2 w-60 ml-6 text-xl leading-tight text-black font-bold"
                style={{ fontFamily: "Play" }}
              >
                <center>99% Proven Reliability</center>
              </h5>
              <div className="border border-[#03E9F4] h-0.5 w-16 mx-auto mt-5 mb-5"></div>
            </div>
          </div>

          <div
            className="card1 relative rounded-lg w-full h-[65vh] border-2"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.17) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px 2px 4px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 10px 10px",
            }}
          >
            <img src={img2} className="h-[45vh] w-full rounded-t-lg" />
            <div className="p-6">
              <h5
                className="mb-2 w-80 mx-auto text-xl leading-tight text-black font-bold"
                style={{ fontFamily: "Play" }}
              >
                <center>Parental Control</center>
              </h5>
              <h5
                className="mb-2 mx-auto w-80 text-xl leading-tight text-black font-bold"
                style={{ fontFamily: "Play" }}
              >
                <center>& Safety Kids</center>
              </h5>
              <div className="border border-[#03E9F4] h-0.5 w-16 mx-auto"></div>
            </div>
          </div>

          <div
            className="card1 relative rounded-lg w-full h-[65vh] border-2"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.17) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px 2px 4px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 10px 10px",
            }}
          >
            <img src={img3} className="h-[45vh] w-full rounded-t-lg" />
            <div className="p-6">
              <h5
                className="mb-2 w-60 ml-6 text-xl leading-tight text-black font-bold"
                style={{ fontFamily: "Play" }}
              >
                <center>24/7 Premium Support</center>
              </h5>
              <div className="border border-[#03E9F4] h-0.5 w-16 mx-auto mt-5 mb-5"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fiber;
