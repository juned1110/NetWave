import React from "react";
import img from "../assets/promo.png";
import GoogleFontLoader from "react-google-font-loader";

const Promo = () => {
  return (
    <>
      <GoogleFontLoader fonts={[{ font: "Play", weights: [400, 700] }]} />
      <div className="relative">
        <div className="image w-full h-[85vh] overflow-hidden relative">
          <img src={img} alt="Promotional Image" className="rounded-t-[40px]" />
          <div
            className="absolute top-0 left-0 w-[10vw] text-center text-white bg-[#03E9F4] py-1 mt-40 ml-32 rounded-xl"
            style={{ fontFamily: "Play" }}
          >
            PROMO
          </div>
          <div className="absolute top-0 left-0 mt-52 ml-28">
            <div
              className="text-center text-white text-4xl "
              style={{ width: "30vw", fontFamily: "Play" }}
            >
              Discount up to 30% for
            </div>
            <div
              className="text-center text-white text-4xl mt-4"
              style={{ width: "20vw", fontFamily: "Play" }}
            >
              new members.
            </div>
          </div>
          <div
            className="absolute h-[50vh] top-0 left-0 mt-24 ml-12 border-dashed border-2 border-white rounded-xl"
            style={{
              width: "44vw",
              padding: "1rem",
              boxShadow:
                "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Promo;
