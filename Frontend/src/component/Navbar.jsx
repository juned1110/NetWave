import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import img from "../assets/logo.png";
import img1 from "../assets/logout.png";
import Login from "../Pages/Login";
import HeroSection from "../component/HeroSection";
import Client from "../component/Client";
import Router from "../component/Router";
import Adv from "../component/Adv";
import Promo from "../component/Promo";
import Services from "../component/Services";
import Experience from "../component/Experience";
import Fiber from "../component/Fiber";
import Feature from "../component/Feature";
import Support from "../component/Support";
import Contactus from "../component/Contactus";
import GoogleFontLoader from "react-google-font-loader";
import { useAuth } from "../store/auth";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isServiceActive, setIsServiceActive] = useState(false);

  const { isLoggedIn, logout } = useAuth();

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
    setIsServiceActive(location.pathname === "/Services");
  }, [location.pathname]);

  const blueButtonStyles = {
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
  };

  return (
    <>
      <GoogleFontLoader fonts={[{ font: "Play", weights: [400, 700] }]} />
      <GoogleFontLoader
        fonts={[{ font: "Signika Negative", weights: [400, 700] }]}
      />
      <div className="bg-zinc-900 rounded-full sticky top-0 shadow-xl shadow-[#504848] mb-[2px] z-10">
        <nav className="flex items-center justify-between px-12">
          <div>
            <NavLink to="/">
              <img src={img} alt="logo" className="w-20 h-20" />
            </NavLink>
          </div>
          <ul className="flex items-center">
            <li className="ml-8 text-xl my-5 mr-5 text-white duration-500 hover:text-[#03e9f4] cursor-pointer">
              <NavLink style={{ fontFamily: "Play" }} to="/">
                Home
              </NavLink>
            </li>
            <li className="ml-8 text-xl my-5 mr-5 text-white duration-500 hover:text-[#03e9f4] cursor-pointer">
              <NavLink style={{ fontFamily: "Play" }} to="Packages">
                Packages
              </NavLink>
            </li>
            <li className="ml-8 text-xl my-5 mr-5 text-white duration-500 hover:text-[#03e9f4] cursor-pointer">
              <NavLink style={{ fontFamily: "Play" }} to="Services">
                Services
              </NavLink>
            </li>
            <li className="ml-8 text-xl my-5 mr-5 text-white duration-500 hover:text-[#03e9f4] cursor-pointer">
              <NavLink style={{ fontFamily: "Play" }} to="Contactus">
                Contact us
              </NavLink>
            </li>
            {isLoggedIn ? (
              <button
                className="ml-8 text-xl my-5 mr-10 cursor-pointer rounded-full px-6 py-2 bg-[#F4F4F4] text-[#676262] hover:text-[#FB0300] "
                style={{ fontFamily: "Signika Negative " }}
              >
                <NavLink to="logout">
                  <button
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                    onClick={logout}
                    className="flex flex-row-reverse"
                  >
                    Logout
                    <img src={img1} className=" w-7 mr-1" />
                  </button>
                </NavLink>
              </button>
            ) : (
              <li className="ml-8 text-xl my-5 mr-5 text-white duration-500 hover:text-[#03e9f4] cursor-pointer">
                <button
                  style={blueButtonStyles}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => setShowModal(!showModal)}
                >
                  <div style={{ fontFamily: "Signika Negative " }}>
                    Get started
                  </div>
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
      {showModal && (
        <Login
          showModal={showModal}
          closeModal={closeModal}
          showHideCrossBtn={true}
        />
      )}
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
