import React from "react";
import img1 from "../assets/supports.png";
import GoogleFontLoader from "react-google-font-loader";

const Support = () => {
  return (
    <>
      <GoogleFontLoader fonts={[{ font: "Play", weights: [400, 700] }]} />
      <div className="relative md:mt-0 mt-[55vh]  ">
        <div className="image w-full h-screen overflow-hidden relative ">
          <img
            src={img1}
            alt="Promotional Image"
            className=" mx-14 w-[83.5vw] h-[40vh] md:h-screen ml-[9vw] rounded-xl "
          />
          <div
            className="absolute -top-20 right-[17vw] w-[15vw] text-center text-white bg-[#03E9F4] py-1 mt-48 ml-28 rounded-xl z-10"
            style={{ fontFamily: "Play" }}
          >
            NEED MORE HELP?
          </div>
          <div className="absolute top-0 left-0 mt-[17vh] md:mt-[30vh] ml-24 md:ml-20 z-10">
            <div
              className="text-center text-black text-xl md:text-3xl ml-[40vw] md:ml-[45vw] font-bold"
              style={{ width: "45vw", fontFamily: "Play" }}
            >
              Contact our team of
            </div>
            <div
              className="text-center text-black text-xl md:text-3xl ml-[40vw] md:ml-[46vw] mt-2 font-bold"
              style={{ width: "45vw", fontFamily: "Play" }}
            >
              experts to explore plan
            </div>
            <div
              className="text-center text-black text-xl md:text-3xl ml-[48vw] md:ml-[53vw] mt-2 font-bold"
              style={{ width: "30vw", fontFamily: "Play" }}
            >
              options.
            </div>
          </div>
          <div
            className="absolute h-[20vh] md:h-[55vh] top-0 left-0 mt-[10vh] ml-[60vw] border-solid border-2 border-[#03E9F4] rounded-xl"
            style={{
              width: "30vw",
              padding: "1rem",
              boxShadow:
                "rgba(0, 0, 0, 0.17) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px 2px 4px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 10px 10px",
              backdropFilter: "blur(0.1px)",
              backgroundColor: "rgba(255, 255, 255, 0.4)",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Support;
