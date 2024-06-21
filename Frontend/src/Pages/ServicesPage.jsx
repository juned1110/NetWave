import React, { useEffect } from "react";
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
import { useAuth } from "../store/auth";

const services = [
  {
    icon: faGlobe,
    title: "Internet Service",
    description:
      "A digital gateway connecting global communities, fostering innovation, & empowering limitless exploration.",
  },
  {
    icon: faTv,
    title: "Satellite TV",
    description:
      "Access global channels via orbiting satellites, delivering diverse entertainment to homes worldwide.",
  },
  {
    icon: faTowerCell,
    title: "VOIP",
    description:
      "Voice Over Internet Protocol, enabling voice communication via internet, cost-effective and versatile.",
  },
  {
    icon: faEthernet,
    title: "VPN Services",
    description:
      "Services safeguard online privacy by encrypting data, masking IP addresses, and ensuring secure browsing.",
  },
  {
    icon: faClapperboard,
    title: "Movie Streaming",
    description:
      "Embark on cinematic adventures anytime, anywhere with a vast selection of movies streaming seamlessly.",
  },
  {
    icon: faCloudArrowDown,
    title: "Cloud Storage",
    description:
      "Securely store, access, and manage files online, facilitating collaboration and data scalability.",
  },
];

const ServicesPage = () => {
  const { user, isLoggedIn, loading } = useAuth();

  useEffect(() => {
    console.log("User object:", user);
    console.log("Is logged in:", isLoggedIn);
  }, [user, isLoggedIn]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center mt-[40vh] text-5xl font-bold ">
        <div className="h-[30vh] ">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <GoogleFontLoader fonts={[{ font: "Play", weights: [400, 700] }]} />
      <div className="relative w-full h-auto bg-gradient-to-r from-[#ffffff] to-[#ECE9E6]">
        <div className="absolute mt-5 left-14 w-[11rem] py-4 rounded-md bg-[#03E9F4] text-center text-black font-bold text-sm">
          <div
            className="flex justify-center items-center h-full"
            style={{ fontFamily: "Play" }}
          >
            Hello {user.firstname} {user.lastname}
          </div>
        </div>
        <div
          className="absolute mt-20 left-14 text-4xl text-black font-bold"
          style={{ fontFamily: "Play" }}
        >
          We are Professional Internet Service
          <p style={{ fontFamily: "Play" }}>Provider.</p>
        </div>

        <div className="grid grid-cols-3 gap-12 p-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-lg h-[65vh] border-2 flex flex-col items-center justify-center mt-36"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.17) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px 2px 4px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 10px 10px",
              }}
            >
              <FontAwesomeIcon
                icon={service.icon}
                style={{ color: "#03E9F4" }}
                className="h-10 w-10 mb-6"
              />
              <div className="p-6 text-center">
                <h5
                  className="mb-2 text-xl leading-tight text-black font-bold"
                  style={{ fontFamily: "Play" }}
                >
                  {service.title}
                </h5>
                <p
                  className="mb-4 text-base text-neutral-600"
                  style={{ fontFamily: "Play" }}
                >
                  {service.description}
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
