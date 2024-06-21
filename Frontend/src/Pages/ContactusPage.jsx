import React, { useEffect, useState } from "react";
import GoogleFontLoader from "react-google-font-loader";
import { useAuth } from "../store/auth";

const defaultContactFormData = {
  username: "",
  location: "",
  phone: "",
  email: "",
  message: "",
};

const ContactusPage = () => {
  const [contact, setContact] = useState(defaultContactFormData);
  const [userData, setUserData] = useState(true);
  const { user, isLoggedIn, loading } = useAuth();

  useEffect(() => {
    if (userData && user) {
      setContact({
        username: user.firstname,
        location: "",
        phone: user.mobile,
        email: user.email,
        message: "",
      });
      setUserData(false);
    }
  }, [user, userData]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact(defaultContactFormData);
        const data = await response.json();
        console.log(data);
        alert("Message sent successfully");
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
        alert("Message not sent: " + errorData.message);
      }
    } catch (error) {
      alert("Message not sent due to a network error");
      console.error("Network error:", error);
    }
  };

  useEffect(() => {
    console.log("User object:", user);
    console.log("Is logged in:", isLoggedIn);
  }, [user, isLoggedIn]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center mt-[40vh] text-5xl font-bold">
        <div className="h-[30vh]">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <GoogleFontLoader fonts={[{ font: "Play", weights: [400, 700] }]} />
      <div className="w-full h-[115vh] flex p-28 pt-5 bg-gradient-to-r from-[#ffffff] to-[#ECE9E6]">
        <div
          className="left h-[110vh] w-1/2 relative rounded-3xl mt-10"
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          }}
        >
          <div
            className="ml-16 w-36 py-4 rounded-md bg-[#03E9F4] text-center text-black font-bold text-sm mt-10"
            style={{ fontFamily: "Play" }}
          >
            Hello {user.firstname} {user.lastname}
          </div>
          <p
            className="ml-16 mt-1 text-3xl text-black font-bold"
            style={{ fontFamily: "Play" }}
          >
            Simple Process to Apply Service.
          </p>

          {/* Step 1 */}
          <p
            className="ml-[102px] mb-1 text-sm mt-1 text-[#03E9F4] relative"
            style={{ fontFamily: "Play" }}
          >
            STEP
          </p>
          <div
            className="rounded-full h-20 w-20 ml-20 bg-blue-900 flex justify-center items-center"
            style={{
              background: "linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
              backgroundImage:
                "-moz-linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
              filter:
                "progid:DXImageTransform.Microsoft.gradient( startColorstr='#0061FF', endColorstr='#60EFFF',GradientType=1)",
            }}
          >
            <span
              className="text-white font-bold text-4xl relative"
              style={{ fontFamily: "Play" }}
            >
              1
            </span>
          </div>
          <span
            className="absolute left-44 top-[29vh] font-bold"
            style={{ fontFamily: "Play" }}
          >
            Check Coverage Availability
          </span>
          <div className="h-0.5 w-1/2 ml-20 mt-3 bg-[#03E9F4]"></div>

          {/* Step 2 */}
          <p
            className="ml-[102px] mb-1 text-sm mt-1 text-[#03E9F4] relative"
            style={{ fontFamily: "Play" }}
          >
            STEP
          </p>
          <div
            className="rounded-full h-20 w-20 ml-20 bg-blue-900 flex justify-center items-center"
            style={{
              background: "linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
              backgroundImage:
                "-moz-linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
              filter:
                "progid:DXImageTransform.Microsoft.gradient( startColorstr='#0061FF', endColorstr='#60EFFF',GradientType=1)",
            }}
          >
            <span
              className="text-white font-bold text-4xl relative"
              style={{ fontFamily: "Play" }}
            >
              2
            </span>
          </div>
          <span
            className="absolute left-44 top-[49vh] font-bold"
            style={{ fontFamily: "Play" }}
          >
            Survey Location
          </span>
          <div className="h-0.5 w-1/2 ml-20 mt-3 bg-[#03E9F4]"></div>

          {/* Step 3 */}
          <p
            className="ml-[102px] mb-1 text-sm mt-1 text-[#03E9F4] relative"
            style={{ fontFamily: "Play" }}
          >
            STEP
          </p>
          <div
            className="rounded-full h-20 w-20 ml-20 bg-blue-900 flex justify-center items-center"
            style={{
              background: "linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
              backgroundImage:
                "-moz-linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
              filter:
                "progid:DXImageTransform.Microsoft.gradient( startColorstr='#0061FF', endColorstr='#60EFFF',GradientType=1)",
            }}
          >
            <span className="text-white font-bold text-4xl relative">3</span>
          </div>
          <span
            className="absolute left-44 top-[69vh] font-bold"
            style={{ fontFamily: "Play" }}
          >
            Apply Contract
          </span>
          <div className="h-0.5 w-1/2 ml-20 mt-3 bg-[#03E9F4]"></div>

          {/* Step 4 */}
          <p
            className="ml-[102px] mb-1 text-sm mt-1 text-[#03E9F4] relative"
            style={{ fontFamily: "Play" }}
          >
            STEP
          </p>
          <div
            className="rounded-full h-20 w-20 ml-20 bg-blue-900 flex justify-center items-center"
            style={{
              background: "linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
              backgroundImage:
                "-moz-linear-gradient(90deg, #0061FF 0%, #60EFFF 100%)",
              filter:
                "progid:DXImageTransform.Microsoft.gradient( startColorstr='#0061FF', endColorstr='#60EFFF',GradientType=1)",
            }}
          >
            <span className="text-white font-bold text-4xl relative">4</span>
          </div>
          <span
            className="absolute left-44 top-[89vh] font-bold"
            style={{ fontFamily: "Play" }}
          >
            Connect with World
          </span>
        </div>

        {/* Contact Form */}
        <div className="right h-[110vh] w-1/2 rounded-r-3xl relative">
          <form onSubmit={handleSubmit}>
            <div className="ml-12 mt-24 text-black font-bold">
              <h1 className="text-3xl mb-2 " style={{ fontFamily: "Play" }}>
                Contact Us
              </h1>
              <p
                className="text-sm text-[#03E9F4] mb-4"
                style={{ fontFamily: "Play" }}
              >
                Please fill in the form below to get in touch with us.
              </p>

              <label className="block mb-2" style={{ fontFamily: "Play" }}>
                Username
                <input
                  className="block w-3/4 mt-1 p-2 border border-gray-300 rounded-md"
                  type="text"
                  name="username"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </label>

              <label className="block mb-2" style={{ fontFamily: "Play" }}>
                Location
                <input
                  className="block w-3/4 mt-1 p-2 border border-gray-300 rounded-md"
                  type="text"
                  name="location"
                  value={contact.location}
                  onChange={handleInput}
                  required
                />
              </label>

              <label className="block mb-2" style={{ fontFamily: "Play" }}>
                Phone
                <input
                  className="block w-3/4 mt-1 p-2 border border-gray-300 rounded-md"
                  type="tel"
                  name="phone"
                  value={contact.phone}
                  onChange={handleInput}
                  required
                />
              </label>

              <label className="block mb-2" style={{ fontFamily: "Play" }}>
                Email
                <input
                  className="block w-3/4 mt-1 p-2 border border-gray-300 rounded-md"
                  type="email"
                  name="email"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </label>

              <label className="block mb-2" style={{ fontFamily: "Play" }}>
                Message
                <textarea
                  className="block w-3/4 mt-1 p-2 border border-gray-300 rounded-md"
                  name="message"
                  value={contact.message}
                  onChange={handleInput}
                  required
                />
              </label>

              <button
                type="submit"
                className="block w-3/4 mt-4 py-2 bg-[#03E9F4] text-black font-bold rounded-md"
                style={{ fontFamily: "Play" }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactusPage;
