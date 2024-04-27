import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmericas,
  faTv,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import img from "../assets/router.png";
import GoogleFontLoader from "react-google-font-loader";

const Router = () => {
  return (
    <>
      <GoogleFontLoader fonts={[{ font: "Play", weights: [400, 700] }]} />
      <div className="flex">
        <div className="left w-[50vw] h-[100vh]">
          <div className="w-full h-screen mt-48 ">
            <span
              style={{ fontFamily: "Play" }}
              className="bg-[#3dc0f3] text-[#f1f1f1] rounded-sm p-1 px-4 text-sm ml-12"
            >
              SECURE CONNECTION
            </span>
            <div className="text-4xl font-bold ml-12 mt-8">
              <p style={{ fontFamily: "Play" }}>10x faster than the</p>
              <p style={{ fontFamily: "Play" }}>current standard of</p>
              <p style={{ fontFamily: "Play" }}>WiFi.</p>
            </div>
            <button
              className="text-gray-100 font-bold py-3 px-8 rounded inline-flex items-center ml-12 mt-8 bg-[#03E9F4] hover:bg-[#3dc0f3] text-xs transition duration-300 ease-in-out"
              style={{ fontFamily: "Play" }}
            >
              GET STARTED
            </button>
          </div>
        </div>
        <div className="mid w-[50vw] h-[100vh]">
          <img src={img} alt="" />
        </div>
        <div className="right w-[50vw] h-[100vh]">
          <div className="w-full h-screen flex flex-col gap-10">
            <p className="mt-48 w-full flex items-center">
              <FontAwesomeIcon
                icon={faEarthAmericas}
                style={{ color: "#3dc0f3" }}
                className="h-10 w-10 ml-20 "
              />
              <div
                className="text-2xl ml-7 font-semibold"
                style={{ fontFamily: "Play" }}
              >
                Ultra fast Connection
              </div>
            </p>
            <p className="w-full flex items-center">
              <FontAwesomeIcon
                icon={faTv}
                style={{ color: "#3dc0f3" }}
                className="h-10 w-10 ml-20"
              />
              <div
                className="text-2xl ml-7 font-semibold"
                style={{ fontFamily: "Play" }}
              >
                Satellite TV
              </div>
            </p>
            <p className="h-10 w-10 flex items-center">
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: "#3dc0f3" }}
                className="h-10 w-10 ml-20"
              />
              <div
                className="text-2xl ml-7 font-semibold"
                style={{ fontFamily: "Play" }}
              >
                VOIP
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Router;
