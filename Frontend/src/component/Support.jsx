import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePen,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/support.png";
import GoogleFontLoader from "react-google-font-loader";

const Support = () => {
  return (
    <>
      <GoogleFontLoader fonts={[{ font: "Play", weights: [400, 700] }]} />
      <div className="relative ">
        <div className="image w-full h-screen overflow-hidden relative ">
          <img
            src={img1}
            alt="Promotional Image"
            className="rounded-t-[40px] mx-14 w-[83.5vw] h-[120vh] ml-[9vw] "
          />
          <div
            className="absolute -top-20 right-[17vw] w-[15vw] text-center text-white bg-[#03E9F4] py-1 mt-48 ml-28 rounded-xl z-10"
            style={{ fontFamily: "Play" }}
          >
            NEED MORE HELP?
          </div>
          <div className="absolute top-0 left-0 mt-[30vh] ml-20  z-10">
            <div
              className="text-center text-black text-3xl ml-[45vw] font-bold"
              style={{ width: "45vw", fontFamily: "Play" }}
            >
              Contact our team of
            </div>
            <div
              className="text-center text-black text-3xl ml-[46vw] mt-2 font-bold"
              style={{ width: "45vw", fontFamily: "Play" }}
            >
              experts to explore plan
            </div>
            <div
              className=" text-center text-black text-3xl ml-[53vw] mt-2 font-bold "
              style={{ width: "30vw", fontFamily: "Play" }}
            >
              options.
            </div>
          </div>
          <div
            className="absolute  h-[55vh] top-0 left-0 mt-[10vh] ml-[60vw] border-solid border-2 border-[#03E9F4] rounded-xl "
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
        <div className="flex relative">
          <div
            className="card1 rounded-lg w-[25vw] h-[65vh] border-2 mx-12 mb-12 absolute bottom-0 left-7 top-[-10vh] "
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.17) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px 2px 4px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 10px 10px",
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <FontAwesomeIcon
              icon={faFilePen}
              style={{ color: "#03E9F4" }}
              className="h-10 w-10  ml-32 mt-20 "
            />
            <div className="p-6">
              <h5
                className="mb-2 w-60 ml-10 mt-1  text-xl leading-tight text-black font-bold"
                style={{ fontFamily: "Play" }}
              >
                Customer Services
              </h5>
              <div className="border border-[#03E9F4] h-0.5 w-16 ml-24 mt-5 mb-5"></div>
              <button className="text-gray-100 font-bold py-3 px-10 rounded inline-flex items-center ml-12 mt-5 bg-[#03E9F4] hover:bg-[#3dc0f3] text-xs transition duration-300 ease-in-out">
                <span style={{ fontFamily: "Play" }}>CHAT NOW</span>
              </button>
            </div>
          </div>

          <div
            className="card2 rounded-lg w-[25vw] h-[65vh] border-2 mx-12 mb-12 absolute bottom-0 left-[35vw] top-[-10vh] "
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.17) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px 2px 4px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 10px 10px",
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <FontAwesomeIcon
              icon={faEnvelopeOpenText}
              style={{ color: "#03E9F4" }}
              className="h-10 w-10  ml-32 mt-20 "
            />
            <div className="p-6">
              <h5
                className="mb-2 w-60 ml-14 mt-1  text-xl leading-tight text-black font-bold"
                style={{ fontFamily: "Play" }}
              >
                Ticket Support
              </h5>
              <div className="border border-[#03E9F4] h-0.5 w-16 ml-24 mt-5 mb-5"></div>
              <button className="text-gray-100 font-bold py-3 px-10 rounded inline-flex items-center ml-14 mt-5 bg-[#03E9F4] hover:bg-[#3dc0f3] text-xs transition duration-300 ease-in-out">
                <span style={{ fontFamily: "Play" }}>SEND TICKET</span>
              </button>
            </div>
          </div>
          <div
            className="card3 rounded-lg w-[25vw] h-[65vh] border-2 mx-12 mb-12 absolute bottom-0 left-[65vw] top-[-10vh] "
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.17) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px 2px 4px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 10px 10px",
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <FontAwesomeIcon
              icon={faFilePen}
              style={{ color: "#03E9F4" }}
              className="h-10 w-10  ml-32 mt-20 "
            />
            <div className="p-6">
              <h5
                className="mb-2 w-60 ml-[7vw] mt-1  text-xl leading-tight text-black font-bold"
                style={{ fontFamily: "Play" }}
              >
                Insight
              </h5>
              <div className="border border-[#03E9F4] h-0.5 w-16 ml-[7vw] mt-5 mb-5"></div>
              <button className="text-gray-100 font-bold py-3 px-10 rounded inline-flex items-center ml-12 mt-5 bg-[#03E9F4] hover:bg-[#3dc0f3] text-xs transition duration-300 ease-in-out">
                <span style={{ fontFamily: "Play" }}>READ ARTICLE</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
