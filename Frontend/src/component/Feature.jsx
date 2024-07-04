import React from "react";
import img1 from "../assets/family.png";
import img2 from "../assets/vr.png";
import GoogleFontLoader from "react-google-font-loader";

const Feature = () => {
  return (
    <>
      <GoogleFontLoader fonts={[{ font: "Play", weights: [400, 700] }]} />
      <div className="w-full h-screen mt-[140vh] md:mt-60 mb-10 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        <div className="left relative w-full h-[70vh] md:h-screen ml-14 md:ml-0">
          <img
            src={img1}
            className="w-full h-full bg-gradient-to-r to-transparent opacity-70 backdrop-filter backdrop-blur-3xl rounded-[40px]"
            alt="Family"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.8) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.8) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.8) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.8) 0px 2px 1px, rgba(0, 0, 0, 0.8) 0px 1px 2px, rgba(0, 0, 0, 0.8) 0px 2px 4px, rgba(0, 0, 0, 0.8) 0px 4px 2px, rgba(0, 0, 0, 0.8) 0px 10px 10px",
            }}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">
            <p
              className=" text-6xl md:text-3xl font-extrabold w-[45vw]"
              style={{ fontFamily: "Play" }}
            >
              Safe & Secure Connection with
            </p>
            <p
              className="text-6xl md:text-3xl font-extrabold ml-7 w-[40vw]"
              style={{ fontFamily: "Play" }}
            >
              firewall protection.
            </p>
          </div>
        </div>
        <div className="right w-full  h-[70vh] md:h-screen relative ml-14 md:ml-0">
          <img
            src={img2}
            alt="VR"
            className="w-full h-full bg-gradient-to-r to-transparent opacity-70 backdrop-filter backdrop-blur-3xl rounded-[40px]"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.8) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.8) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.8) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.8) 0px 2px 1px, rgba(0, 0, 0, 0.8) 0px 1px 2px, rgba(0, 0, 0, 0.8) 0px 2px 4px, rgba(0, 0, 0, 0.8) 0px 4px 2px, rgba(0, 0, 0, 0.8) 0px 10px 10px",
            }}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">
            <p
              className="text-6xl md:text-3xl font-extrabold w-[45vw]"
              style={{ fontFamily: "Play" }}
            >
              Wi-Fi® built for the next gen for
            </p>
            <p
              className="text-6xl md:text-3xl font-extrabold "
              style={{ fontFamily: "Play" }}
            >
              your families
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
