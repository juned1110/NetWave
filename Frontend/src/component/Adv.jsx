import React from "react";
import img from "../assets/advert.png";
import GoogleFontLoader from "react-google-font-loader";

const Adv = () => {
  return (
    <React.Fragment>
      <GoogleFontLoader fonts={[{ font: "Play", weights: [400, 700] }]} />
      <div className="mt-12 mb-12">
        <div
          className="wrapper bg-[#03E9F4] rounded-2xl ml-20 mr-20 h-52 flex"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
          }}
        >
          <div className="left w-[17rem] overflow-hidden flex justify-center items-center">
            <img src={img} alt="" />
          </div>
          <div className="right flex flex-col justify-center">
            <p
              className="ml-14 text-4xl font-bold tracking-tight"
              style={{ fontFamily: "Play" }}
            >
              A simple, reliable, and affordable solution
            </p>
            <p
              className="ml-14 mt-3 text-4xl font-bold tracking-tight"
              style={{ fontFamily: "Play" }}
            >
              for unlimited internet access.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Adv;
