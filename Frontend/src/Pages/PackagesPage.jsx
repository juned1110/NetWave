import React, { useState, useEffect } from "react";
import GoogleFontLoader from "react-google-font-loader";
import { useAuth } from "../store/auth";

const PackagesPage = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { user, isLoggedIn } = useAuth();

  useEffect(() => {
    console.log("User object:", user);
    console.log("Is logged in:", isLoggedIn);
  }, [user, isLoggedIn]);

  const packages = [
    {
      name: "Basic",
      monthlyPrice: 400,
      yearlyPrice: 4500,
      description: " 25 Mbps",
    },
    {
      name: "Advance",
      monthlyPrice: 600,
      yearlyPrice: 7000,
      description: " 50 Mbps",
    },
    {
      name: "Premium",
      monthlyPrice: 800,
      yearlyPrice: 9000,
      description: " 80 Mbps",
    },
  ];

  if (!user) {
    return <div>Loading...</div>; // Display loading state while user data is being fetched
  }

  return (
    <>
      <GoogleFontLoader fonts={[{ font: "Lilita One", weights: [400, 700] }]} />
      <div className="w-full h-screen relative">
        <li
          className="text-black font-extrabold py-4 px-8 rounded inline-flex items-center ml-20 mt-5 bg-[#4ae1e9] text-xs transition duration-300 ease-in-out"
          style={{ fontFamily: "Alegreya Sans SC" }}
        >
          <span className="text-[4vh]">
            Hello {user.firstname} {user.lastname}
          </span>
        </li>
        <div className="w-[80vw] h-[100vh] border-[15px] border-[#03e9f4] absolute left-32 mt-8 rounded-[15vh] ">
          <div
            className="w-full h-screen flex justify-center mt-10"
            style={{ fontFamily: "Lilita One" }}
          >
            Pricing
          </div>
          <div className="absolute w-full h-screen top-0 mt-16 flex justify-evenly">
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
