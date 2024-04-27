import React, { useState, useEffect, useRef } from "react";
import img1 from "../assets/Design1.png";
import img2 from "../assets/Design2.png";
import img3 from "../assets/Design3.png";
import img4 from "../assets/Design4.png";
import GoogleFontLoader from "react-google-font-loader";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3, img4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <GoogleFontLoader fonts={[{ font: "Righteous", weights: [400, 700] }]} />
      <GoogleFontLoader fonts={[{ font: "Unbounded", weights: [400, 700] }]} />
      <GoogleFontLoader fonts={[{ font: "Antic Slab", weights: [400, 700] }]} />
      <GoogleFontLoader
        fonts={[{ font: "Alegreya Sans SC", weights: [400, 700] }]}
      />

      <div className="section_top w-full h-screen relative overflow-hidden rounded-t-[40px] z-30">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`absolute inset-0 object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-gray-400 to-transparent opacity-60 backdrop-filter backdrop-blur-3xl"></div>
        <div className="content absolute inset-0 flex flex-col justify-center items-start text-black z-10">
          <h1 className="text-7xl font-black mt-16 ml-20 ">
            <span style={{ fontFamily: "Righteous" }}>
              Stop wasting time. Start
            </span>
          </h1>
          <span
            style={{ fontFamily: "Righteous" }}
            className="text-7xl font-black ml-20"
          >
            connecting.
          </span>
          <div className="border border-[#3dc0f3] h-1 w-32 bg-[#3dc0f3] ml-20 mt-5 mb-5"></div>
          <h1 className="ml-20 font-semibold text-2xl">
            <span
              style={{ fontFamily: "Antic Slab" }}
              className="text-3xl font-black"
            >
              Connect to the things that matter. Powering safer, smarter, more{" "}
            </span>
          </h1>
          <span
            style={{ fontFamily: "Antic Slab" }}
            className="ml-20 font-semibold text-3xl"
          >
            secure, and magical experiences for you and everyone around
          </span>
          <div
            style={{ fontFamily: "Antic Slab" }}
            className="ml-20 font-semibold text-3xl mb-5"
          >
            you.
          </div>
          <li
            style={{ fontFamily: "Unbounded, sans-serif" }}
            className="ml-20 list-none mb-1 text-1xl font-extrabold "
          >
            Dedicated 24/7 customer care
          </li>
          <li
            style={{ fontFamily: "Unbounded, sans-serif" }}
            className="ml-20 font-extrabold text-1xl list-none mb-1"
          >
            Up to 300 GB of High-Speed Data
          </li>
          <li
            style={{ fontFamily: "Unbounded, sans-serif" }}
            className="ml-20 font-extrabold text-1xl list-none mb-1"
          >
            Plus, up to $600 in deals!*
          </li>
          <button
            className="text-gray-100 font-bold py-4 px-8 rounded inline-flex items-center ml-20 mt-5 bg-[#03E9F4] hover:bg-[#3dc0f3] text-xs transition duration-300 ease-in-out"
            style={{ fontFamily: "Alegreya Sans SC" }}
          >
            <span className="text-[3vh]">SEE PLANS AND DEALS</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
