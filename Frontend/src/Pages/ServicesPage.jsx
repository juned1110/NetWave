import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faTv,
  faTowerCell,
  faEthernet,
  faClapperboard,
  faCloudArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import GoogleFontLoader from "react-google-font-loader";

const ServicesPage = () => {
  return (
    <>
      <GoogleFontLoader fonts={[{ font: "Play", weights: [400, 700] }]} />
      <div className="relative w-full h-auto bg-gradient-to-r from-[#ffffff] to-[#ECE9E6]">
        <div className="absolute mt-5 left-14 w-36 p-1 py-2 rounded-md bg-[#03E9F4] text-center text-black font-bold text-sm ">
          <div
            className="flex justify-center items-center h-full"
            style={{ fontFamily: "Play" }}
          >
            WHAT WE OFFER
          </div>
        </div>
        <div
          className="absolute mt-20 left-14 text-4xl text-black font-bold"
          style={{ fontFamily: "Play" }}
        >
          We are Professional Internet Service
          <p style={{ fontFamily: "Play" }}>Provider.</p>
        </div>

        <div className="flex flex-wrap justify-between w-full relative">
          <div
            className="card1 relative rounded-lg w-[25vw] h-[65vh] border-2 mx-12 mb-12 mt-48"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.17) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px 2px 4px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 10px 10px",
            }}
          >
            <FontAwesomeIcon
              icon={faGlobe}
              style={{ color: "#03E9F4" }}
              className="h-10 w-10 ml-32 mt-6 absolute"
            />

            <div className="p-6">
              <h5
                className="mb-2  mt-16 ml-14 text-xl leading-tight text-black font-bold"
                style={{ fontFamily: "Play" }}
              >
                Internet Service
              </h5>
              <p
                className="mb-4 ml-13 text-base text-neutral-600"
                style={{ fontFamily: "Play" }}
              >
                A digital gateway connecting global communities, fostering
                innovation, & empowering limitless exploration.
              </p>
              <div className="border border-[#03E9F4] h-0.5 w-16 ml-24 mt-5 mb-5"></div>
            </div>
          </div>

          <div
            className="card2 relative rounded-lg w-[25vw] h-[65vh] border-2 mx-12 mb-12 mt-48"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.17) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px 2px 4px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 10px 10px",
            }}
          >
            <FontAwesomeIcon
              icon={faTv}
              style={{ color: "#03E9F4" }}
              className="h-10 w-10 ml-32 mt-6 absolute"
            />

            <div className="p-6">
              <h5 className="mb-2 mt-16 ml-20 text-xl  leading-tight text-black font-bold" style={{ fontFamily: "Play" }}>
                Satellite TV
              </h5>
              <p className="mb-4 ml-13 text-base text-neutral-600" style={{ fontFamily: "Play" }}>
                Access global channels via orbiting satellites, delivering
                diverse entertainment to homes worldwide.
              </p>
              <div className="border border-[#03E9F4] h-0.5 w-16 ml-24 mt-5 mb-5"></div>
            </div>
          </div>
          <div
            className="card3 relative rounded-lg w-[25vw] h-[65vh] border-2 mx-12 mb-12 mt-48"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.17) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px 2px 4px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 10px 10px",
            }}
          >
            <FontAwesomeIcon
              icon={faTowerCell}
              style={{ color: "#03E9F4" }}
              className="h-10 w-10 ml-32 mt-6 absolute"
            />

            <div className="p-6">
              <h5 className="mb-2 mt-16 ml-24 text-xl leading-tight text-black font-bold" style={{ fontFamily: "Play" }}>
                VOIP
              </h5>
              <p className="mb-4 ml-7 text-base text-neutral-600" style={{ fontFamily: "Play" }}>
                Voice Over Internet Protocol, enabling voice communication via
                internet, cost-effective and versatile.
              </p>
              <div className="border border-[#03E9F4] h-0.5 w-16  ml-24 mt-5 mb-5"></div>
            </div>
          </div>
          <div
            className="card4 relative rounded-lg w-[25vw] h-[65vh] border-2 mx-12 mb-12"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.17) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px 2px 4px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 10px 10px",
            }}
          >
            <FontAwesomeIcon
              icon={faEthernet}
              style={{ color: "#03E9F4" }}
              className="h-10 w-10 ml-32 mt-6 absolute"
            />

            <div className="p-6">
              <h5 className="mb-2 mt-16 ml-14 text-xl leading-tight text-black font-bold">
                VPN Services
              </h5>
              <p className="mb-4 ml-4 text-base text-neutral-600" style={{ fontFamily: "Play" }}>
                Services safeguard online privacy by encrypting data, masking IP
                addresses, and ensuring secure browsing.
              </p>
              <div className="border border-[#03E9F4] h-0.5 w-16 ml-24 mt-5 mb-5"></div>
            </div>
          </div>
          <div
            className="card5 relative rounded-lg w-[25vw] h-[65vh] border-2 mx-12 mb-12"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.17) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px 2px 4px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 10px 10px",
            }}
          >
            <FontAwesomeIcon
              icon={faClapperboard}
              style={{ color: "#03E9F4" }}
              className="h-10 w-10 ml-32 mt-6 absolute"
            />

            <div className="p-6">
              <h5 className="mb-2 mt-16 ml-14 text-xl  leading-tight text-black font-bold" style={{ fontFamily: "Play" }}>
                Movie Streaming
              </h5>
              <p className="mb-4 ml-6 text-base text-neutral-600" style={{ fontFamily: "Play" }}>
                Embark on cinematic adventures anytime, anywhere with a vast
                selection of movies streaming seamlessly
              </p>
              <div className="border border-[#03E9F4] h-0.5 w-16  ml-24 mt-5 mb-5"></div>
            </div>
          </div>
          <div
            className="card6 relative rounded-lg w-[25vw] h-[65vh] border-2 mx-12 mb-12"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.17) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px 2px 4px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 10px 10px",
            }}
          >
            <FontAwesomeIcon
              icon={faCloudArrowDown}
              style={{ color: "#03E9F4" }}
              className="h-10 w-10 ml-32 mt-6 absolute"
            />

            <div className="p-6">
              <h5 className="mb-2 mt-16 ml-14 text-xl leading-tight text-black font-bold" style={{ fontFamily: "Play" }}>
                Cloud Storage
              </h5>
              <p className="mb-4 ml-6 text-base text-neutral-600" style={{ fontFamily: "Play" }}>
                Securely store, access, and manage files online, facilitating
                collaboration and data scalability.
              </p>
              <div className="border border-[#03E9F4] h-0.5 w-16 bg-[#03E9F4] ml-24 mt-5 mb-5"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
