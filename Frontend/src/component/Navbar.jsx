import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import img from "../assets/logo.png";
import Login from "../Pages/Login";
import HeroSection from "./HeroSection";
import Client from "./Client";
import Router from "./Router";
import Adv from "./Adv";
import Promo from "./Promo";
import Services from "./Services";
import Experience from "./Experience";
import Fiber from "./Fiber";
import Feature from "./Feature";
import Support from "./Support";
import Contactus from "./Contactus";
import GoogleFontLoader from "react-google-font-loader";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isServiceActive, setIsServiceActive] = useState(false);

  const location = useLocation();

  const closeModal = () => {
    setShowModal(false);
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    setIsHomeActive(location.pathname === "/");
    setIsServiceActive(location.pathname === "/");
  }, [location.pathname]);

  return (
    <>
      <GoogleFontLoader fonts={[{ font: "Play", weights: [400, 700] }]} />
      <GoogleFontLoader
        fonts={[{ font: "Signika Negative", weights: [400, 700] }]}
      />
      <div className="bg-zinc-900 rounded-full sticky top-0 shadow-xl shadow-[#504848] mb-[2px] z-10">
        <nav className="flex items-center justify-between px-12">
          <div className="">
            <NavLink to="/">
              <img src={img} alt="logo" className="w-auto h-20" />
            </NavLink>
          </div>
          <ul className="flex items-center">
            <li className="ml-8 text-xl my-7 mr-5 text-white duration-500 hover:text-[#03e9f4] cursor-pointer">
              <NavLink style={{ fontFamily: "Play" }} to="/">
                Home
              </NavLink>
            </li>
            <li className="ml-8 text-xl my-7 mr-5 text-white duration-500 hover:text-[#03e9f4] cursor-pointer">
              <NavLink style={{ fontFamily: "Play" }} to="Packages">
                Packages
              </NavLink>
            </li>
            <li className="ml-8 text-xl my-7 mr-5 text-white duration-500 hover:text-[#03e9f4] cursor-pointer">
              <NavLink style={{ fontFamily: "Play" }} to="Services">
                Services
              </NavLink>
            </li>
            <li className="ml-8 text-xl my-7 mr-5 text-white duration-500 hover:text-[#03e9f4] cursor-pointer">
              <NavLink style={{ fontFamily: "Play" }} to="Contactus">
                Contact us
              </NavLink>
            </li>
          </ul>
          <button
            className="button-40"
            onClick={() => setShowModal(!showModal)}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            style={{
              "--glow-color": "#03e9f4",
              "--glow-spread-color": "#03e9f4",
              "--enhanced-glow-color": "#03e9f4",
              "--btn-color": "rgba(241, 241, 241, 0.1)",
              border: ".25em solid var(--glow-color)",
              padding: "1em 3em",
              color: isHovered ? "#000000" : "var(--glow-color)",
              fontSize: "15px",
              fontWeight: "bold",
              backgroundColor: isHovered ? "#f1f1f1" : "var(--btn-color)",
              borderRadius: "1em",
              outline: "none",
              boxShadow: isHovered
                ? "0 0 1em .10em var(--glow-color), 0 0 4em 2em rgba(3, 133, 144, 0.181), inset 0 0 .75em .25em var(--glow-color)"
                : "0 0 1em .15em var(--glow-color), 0 0 1em -5em var(--glow-spread-color), inset 0 0 .95em .1em var(--glow-color)",
              textShadow: "0 0 .5em var(--glow-color)",
              position: "relative",
              transition: "all 0.3s",
              zIndex: showModal ? "9999" : "auto",
            }}
          >
            <div style={{ fontFamily: "Signika Negative " }}>Get started</div>
          </button>
        </nav>
      </div>
      {showModal && <Login showModal={showModal} closeModal={closeModal} />}
      {isHomeActive && <HeroSection />}
      {isHomeActive && <Client />}
      {isHomeActive && <Router />}
      {isHomeActive && <Adv />}
      {isHomeActive && <Promo />}
      {isHomeActive && <Services />}
      {isHomeActive && <Experience />}
      {isHomeActive && <Fiber />}
      {isHomeActive && <Feature />}
      {isHomeActive && <Support />}
      {isHomeActive && <Contactus />}
    </>
  );
};

export default Navbar;
