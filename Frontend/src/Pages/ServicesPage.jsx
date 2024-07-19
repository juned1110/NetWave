import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import img1 from "../assets/card1.png";
import img2 from "../assets/card2.png";
import img3 from "../assets/card3.png";
import img4 from "../assets/card4.png";
import img5 from "../assets/card5.png";
import img6 from "../assets/card6.png";

const ServicesPage = () => {
  const { user, isLoggedIn } = useAuth();
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

  if (!user) {
    return (
      <div className="flex justify-center items-center mt-[40vh] text-5xl font-bold">
        <div className="h-[30vh]">Loading...</div>
      </div>
    );
  }

  return (
    <>
      {/* <GoogleFontLoader fonts={[{ font: "Play", weights: [400, 700] }]} /> */}
      <div className="relative w-full h-auto">
        <div className="absolute md:mb-10 left-4 md:left-14 w-[11rem] py-4 rounded-md bg-[#03E9F4] text-center text-black font-bold text-sm">
          <div
            className="flex justify-center items-center h-full"
            // style={{ fontFamily: "Play" }}
          >
            Hello {user.firstname} {user.lastname}
          </div>
        </div>
        <div
          className="absolute mt-20 left-4 md:left-14 text-2xl md:text-4xl text-black font-bold"
          // style={{ fontFamily: "Play" }}
        >
          We are Professional Internet Service
          <p>Provider.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-12 mt-36 md:mt-28">
          {serviceImg.map((imgSrc, index) => (
            <div
              key={index}
              className="relative rounded-lg h-auto border-2 flex flex-col items-center justify-center mt-32"
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

export default ServicesPage;
