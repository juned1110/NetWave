import React, { useEffect } from "react";
import GoogleFontLoader from "react-google-font-loader";
import { useAuth } from "../store/auth";

const PackagesPage = () => {
  const { user, isLoggedIn } = useAuth();

  useEffect(() => {
    console.log("User object:", user);
    console.log("Is logged in:", isLoggedIn);
  }, [user, isLoggedIn]);

  if (!user) {
    return (
      <>
        <div className="flex justify-center items-center mt-[40vh] text-5xl font-bold ">
          <div className="h-[30vh] ">Loading...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <GoogleFontLoader fonts={[{ font: "Lilita One", weights: [400, 700] }]} />
      <div className="w-full h-screen relative">
        <div
          className="ml-16 w-36 p-1 py-4 rounded-md bg-[#03E9F4] text-center text-black font-bold text-sm mt-10"
          style={{ fontFamily: "Play" }}
        >
          Hello {user.firstname} {user.lastname}
        </div>
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
