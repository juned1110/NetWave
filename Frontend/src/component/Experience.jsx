import React from "react";
import img from "../assets/dad.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <>
      {/* <GoogleFontLoader fonts={[{ font: "Play", weights: [400, 700] }]} /> */}
      <div className="w-full h-screen relative">
        <div
          className=" absolute top-24 left-20 w-36 p-1 py-2 rounded-md bg-[#03E9F4] text-center text-black font-bold text-sm"
          style={{ fontFamily: "Play" }}
        >
          WHAT WE OFFER
        </div>
        <div
          className="absolute top-40 left-20 text-4xl text-black font-bold"
          style={{ fontFamily: "Play" }}
        >
          Empowering people through
          <p style={{ fontFamily: "Play" }}>technology.</p>
        </div>
        <div className="absolute flex flex-col top-72 gap-9">
          <p>
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{ color: "#03E9F4" }}
              className="h-10 w-10 ml-20 "
            />
            <h1
              className="w-44 text-black font-bold text-xl absolute left-36 top-1"
              style={{ fontFamily: "Play" }}
            >
              Internet for home
            </h1>
          </p>
          <p>
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{ color: "#03E9F4" }}
              className="h-10 w-10 ml-20 "
            />
            <h1
              className="w-56 text-black font-bold text-xl absolute left-36 top-20"
              style={{ fontFamily: "Play" }}
            >
              Internet for Business
            </h1>
          </p>
          <p>
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{ color: "#03E9F4" }}
              className="h-10 w-10 ml-20 "
            />
            <h1
              className="w-56 text-black font-bold text-xl absolute left-36 top-40"
              style={{ fontFamily: "Play" }}
            >
              Internet for Educations
            </h1>
          </p>
        </div>
        <div className="right">
          <div className="flex w-[40vw] h-[95vh] items-center relative left-[55vw] top-20 ">
            <img src={img} className="rounded-r-3xl mb-96 md:mt-80" />
          </div>
          <div
            className="rounded-full h-36 w-36 absolute top-16 right-[80vh]"
            style={{
              background: "linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
              backgroundImage:
                "-moz-linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
              filter:
                'progid:DXImageTransform.Microsoft.gradient( startColorstr="#0061FF", endColorstr="#60EFFF",GradientType=1)',
            }}
          >
            <div className="absolute top-7 left-5 text-white">
              <p
                className="absolute left-4 text-5xl font-bold"
                style={{ fontFamily: "Play" }}
              >
                15+
              </p>
              <p
                className="absolute w-36 left-4 top-11 text-sm font-semibold"
                style={{ fontFamily: "Play" }}
              >
                YEARS OF
              </p>
              <p
                className="absolute top-16 left-2 text-sm font-semibold"
                style={{ fontFamily: "Play" }}
              >
                EXPERIENCE
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
