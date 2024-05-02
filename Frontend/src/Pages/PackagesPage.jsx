import React, { useState } from "react";
// import img from "../assets/img_1.png";
import GoogleFontLoader from "react-google-font-loader";

const PackagesPage = () => {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: "Basic",
      monthalyPrice: 400,
      yearlyPrice: 4500,
      description: " 25 Mbps",
      // green: "src/assets/Image.png",
    },
    {
      name: "Advance",
      monthalyPrice: 600,
      yearlyPrice: 7000,
      description: " 50 Mbps",
      // green: "src/assets/Image.png",
    },
    {
      name: "Premium",
      monthalyPrice: 800,
      yearlyPrice: 9000,
      description: " 80 Mbps",
      // green: "src/assets/Image.png",
    },
  ];

  return (
    <>
      <GoogleFontLoader fonts={[{ font: "Lilita One", weights: [400, 700] }]} />
      <div className="w-full h-screen relative">
        <div className="w-[80vw] h-[100vh] border-[15px] border-[#03e9f4] absolute left-32 mt-8 rounded-[15vh] ">
          <div
            className=" w-full h-screen flex justify-center mt-10 "
            style={{ fontFamily: "Lilita One" }}
          >
            Pricing
          </div>
          <div className=" absolute w-full h-screen top-0 mt-16 flex justify-evenly">
            <div className="h-[70vh] w-2/6 flex justify-center mt-10 rounded-t-3xl mr-3 bg-red-900">
              <p className="mt-20">Basic</p>
            </div>
            <div className="h-[77vh] w-2/6 flex justify-center rounded-t-3xl bg-green-900">
              <p className="mt-28">Premium</p>
            </div>
            <div className="h-[70vh] w-2/6 flex justify-center mt-10 rounded-t-3xl ml-3 bg-blue-900">
              <p className="mt-20">Hype</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackagesPage;
