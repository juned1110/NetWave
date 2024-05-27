import React from "react";
import img from "../assets/errorImage.gif";
import GoogleFontLoader from "react-google-font-loader";

const Error = () => {
  return (
    <>
      <GoogleFontLoader fonts={[{ font: "Play", weights: [400, 700] }]} />
      <div className="w-full h-screen bg-white flex flex-col items-center justify-center relative">
        <p
          className="text-9xl font-semibold absolute top-10"
          style={{ fontFamily: "Play" }}
        >
          404
        </p>
        <img src={img} className="w-1/2 h-4/5" alt="Error Illustration" />
        <p
          className="text-4xl font-bold absolute bottom-28"
          style={{ fontFamily: "Play" }}
        >
          Look like you're lost
        </p>
        <p
          className="text-3xl font-bold absolute bottom-16 "
          style={{ fontFamily: "Play" }}
        >
          The page you are looking for is not available!
        </p>
      </div>
    </>
  );
};

export default Error;
