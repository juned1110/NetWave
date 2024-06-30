import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import img from "../assets/logo.png";
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
import GoogleFontLoader from "react-google-font-loader";
import { useAuth } from "../store/auth";
import { FaPowerOff } from "react-icons/fa";
import gsap from "gsap";
import { LampDemo } from "../Animation/lamp";
import { GoogleGeminiEffectDemo } from "../Animation/googleComponent";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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

  // GSAP ANIMATION CODE
  const logoref = useRef();
  const navbarRef = useRef();

  // Navbar refs
  const navrefOne = useRef();
  const navrefTwo = useRef();
  const navrefThree = useRef();
  const navrefFour = useRef();
  const getStartedRef = useRef();

  // Logo Animation
  useEffect(() => {
    const animation = gsap.fromTo(
      logoref.current,
      { rotateY: 0, scale: 1 },
      {
        rotateY: 360,
        scale: 1,
        duration: 1,
        repeat: -1,
        repeatDelay: 3,
        ease: "power1.inOut",
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  // Navbar Opacity Animation on Mount
  useEffect(() => {
    gsap.to(
      [
        navbarRef.current,
        navrefOne.current,
        navrefTwo.current,
        navrefThree.current,
        navrefFour.current,
        getStartedRef.current,
      ],
      {
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power1.out",
      }
    );
  }, []);

  return (
    <>
      <GoogleFontLoader fonts={[{ font: "Play", weights: [400, 700] }]} />
      <GoogleFontLoader
        fonts={[{ font: "Signika Negative", weights: [400, 700] }]}
      />
      <div
        className="bg-zinc-900 rounded-full sticky top-0 shadow-xl shadow-[#504848] mb-[2px] z-20"
        ref={navbarRef}
        style={{ opacity: 0 }}
      >
        <nav className="flex items-center justify-between px-12">
          <div>
            <NavLink to="/">
              <img src={img} alt="logo" ref={logoref} className="w-20 h-20" />
            </NavLink>
          </div>
          <ul className="flex items-center">
            <li
              ref={navrefOne}
              className="ml-8 text-xl my-5 mr-5 duration-500 cursor-pointer"
              style={{ opacity: 0 }}
            >
              <NavLink
                style={{ fontFamily: "Play" }}
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#03e9f4]"
                    : "text-white hover:text-[#03e9f4]"
                }
              >
                Home
              </NavLink>
            </li>
            <li
              ref={navrefTwo}
              className="ml-8 text-xl my-5 mr-5 duration-500 cursor-pointer"
              style={{ opacity: 0 }}
            >
              <NavLink
                style={{ fontFamily: "Play" }}
                to="/Packages"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#03e9f4]"
                    : "text-white hover:text-[#03e9f4]"
                }
              >
                Packages
              </NavLink>
            </li>
            <li
              ref={navrefThree}
              className="ml-8 text-xl my-5 mr-5 duration-500 cursor-pointer"
              style={{ opacity: 0 }}
            >
              <NavLink
                style={{ fontFamily: "Play" }}
                to="/Services"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#03e9f4]"
                    : "text-white hover:text-[#03e9f4]"
                }
              >
                Services
              </NavLink>
            </li>
            <li
              ref={navrefFour}
              className="ml-8 text-xl my-5 mr-5 duration-500 cursor-pointer"
              style={{ opacity: 0 }}
            >
              <NavLink
                style={{ fontFamily: "Play" }}
                to="/Contactus"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#03e9f4]"
                    : "text-white hover:text-[#03e9f4]"
                }
              >
                Contact us
              </NavLink>
            </li>
            {isLoggedIn ? (
              <button className="ml-8 text-xl my-5 mr-10 cursor-pointer rounded-full px-5 py-4 bg-[#ffffff] text-[#676262] hover:text-[#FB0300]">
                <NavLink to="logout">
                  <button
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                    onClick={logout}
                    className="flex flex-row-reverse"
                  >
                    <FaPowerOff />
                  </button>
                </NavLink>
              </button>
            ) : (
              <li
                className="ml-8 text-xl my-5 mr-5 duration-500 cursor-pointer"
                ref={getStartedRef}
                style={{ opacity: 0 }}
              >
                <button
                  style={blueButtonStyles}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => setShowModal(!showModal)}
                >
                  <div style={{ fontFamily: "Signika Negative" }}>
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
      {location.pathname === "/" && <GoogleGeminiEffectDemo />}
      {location.pathname === "/" && <LampDemo />}
      {/* {location.pathname === "/" && <HeroSection />} */}
      {location.pathname === "/" && <Client />}
      {location.pathname === "/" && <Promo />}
      {location.pathname === "/" && <Router />}
      {location.pathname === "/" && <Adv />}
      {/* {location.pathname === "/" && <Services />} */}
      {location.pathname === "/" && <Experience />}
      {location.pathname === "/" && <Fiber />}
      {location.pathname === "/" && <Feature />}
      {location.pathname === "/" && <Support />}
    </>
  );
};

export default Navbar;
