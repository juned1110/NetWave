import React, { useEffect, useState } from "react";
import GoogleFontLoader from "react-google-font-loader";
import { useAuth } from "../store/auth";
import img1 from "../assets/card1.png";
import img2 from "../assets/card2.png";
import img3 from "../assets/card3.png";
import img4 from "../assets/card4.png";
import img5 from "../assets/card5.png";
import img6 from "../assets/card6.png";

const Services = () => {
  const { user, isLoggedIn, loading } = useAuth();
  const [loadingImages, setLoadingImages] = useState(true);
  const { services } = useAuth();

  const serviceImg = [img1, img2, img3, img4, img5, img6];

  useEffect(() => {
    console.log("User object:", user);
    console.log("Is logged in:", isLoggedIn);
  }, [user, isLoggedIn]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingImages(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GoogleFontLoader fonts={[{ font: "Play", weights: [400, 700] }]} />
      <div className="relative w-full h-auto bg-gradient-to-r from-[#ffffff] to-[#ECE9E6]">
        <div
          className="absolute mt-20 left-14 text-4xl text-black font-bold"
          style={{ fontFamily: "Play" }}
        >
          We are Professional Internet Service
          <p style={{ fontFamily: "Play" }}>Provider.</p>
        </div>

        <div className="grid grid-cols-3 gap-12 p-12">
          {serviceImg.map((imgSrc, index) => (
            <div
              key={index}
              className="relative rounded-lg h-[65vh] border-2 flex flex-col items-center justify-center mt-36"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.17) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px 2px 4px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 10px 10px",
              }}
            >
              <img
                src={imgSrc}
                alt={`Service ${index + 1}`}
                className="mb-6 h-24 w-24 object-contain rounded-xl mt-8"
              />
              <div className="p-6 text-center">
                <h5
                  className="mb-2 text-xl leading-tight text-black font-bold"
                  style={{ fontFamily: "Play" }}
                >
                  {services[index].service}
                  <p>in just</p>
                  <p className="text-[#E502B6]">{services[index].price}</p>
                </h5>
                <p className="text-base text-gray-600">
                  {services[index].description}
                </p>
                <div className="border border-[#03E9F4] h-0.5 w-16 mx-auto mt-5 mb-5"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
