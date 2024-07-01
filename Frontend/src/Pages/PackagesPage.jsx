import React, { useEffect, useState } from "react";
import GoogleFontLoader from "react-google-font-loader";
import { useAuth } from "../store/auth";
import axios from "axios";

const PackagesPage = () => {
  const { user, isLoggedIn } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("User object:", user);
    console.log("Is logged in:", isLoggedIn);
  }, [user, isLoggedIn]);

  const handlePayment = async (amount) => {
    const orderURL = "http://localhost:5000/api/payment/order";
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await axios.post(orderURL, {
        amount,
        currency: "INR",
        receipt: `receipt#${amount}`,
        payment_capture: 1, // Ensure payment is captured automatically
      });
      console.log("API", data);

      if (!window.Razorpay) {
        setError("Razorpay SDK not loaded.");
        return;
      }

      const options = {
        key: "rzp_test_fyc5rJqH7juhKk", // Replace with your Razorpay test key
        amount: data.amount,
        name: "NetWave",
        description: "test transaction",
        order_id: data.id,
        handler: function (response) {
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature);
        },
        theme: {
          color: "#f37254",
        },
        method: {
          upi: true, // Enable UPI
          card: true, // Enable card payments
          netbanking: true, // Enable netbanking
        },
      };
      const rzpl = new window.Razorpay(options);
      rzpl.open();
    } catch (error) {
      console.log(error);
      setError("Payment failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center mt-[40vh] text-5xl font-bold ">
        <div className="h-[30vh]">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <GoogleFontLoader fonts={[{ font: "Lilita One", weights: [400, 700] }]} />
      <div className="w-full h-screen relative ">
        <div
          className="ml-16 w-36 p-1 py-4 rounded-md bg-[#03E9F4] text-center text-black font-bold text-sm mt-10"
          style={{ fontFamily: "Play" }}
        >
          Hello {user.firstname} {user.lastname}
        </div>
        <div className="w-[80vw] h-[100vh] border-[15px] border-[#03e9f4] absolute left-32 mt-8 rounded-[15vh] bg-white shadow-xl">
          <div
            className="w-full h-24 flex justify-center items-center mt-10 text-4xl"
            style={{ fontFamily: "Lilita One" }}
          >
            Pricing
          </div>
          <div className="absolute w-full h-screen top-0 mt-16 flex justify-evenly">
            <div className="h-[70vh] w-2/6 flex flex-col items-center mt-10 rounded-t-3xl mr-3 bg-red-600 shadow-lg">
              <h2 className="mt-10 text-3xl font-bold text-white">Basic</h2>
              <p className="mt-4 text-white text-lg">50 Mbps speed</p>
              <p className="mt-2 text-white text-lg">500 GB data cap</p>
              <p className="mt-2 text-white text-lg">₹100/month</p>
              {isLoading ? (
                <button
                  className="bg-fuchsia-800 h-10 mt-8 text-white"
                  disabled
                >
                  Processing...
                </button>
              ) : (
                <button
                  className="bg-fuchsia-800 h-10 mt-8 text-white px-4 py-2 rounded-lg"
                  onClick={() => handlePayment(100)}
                >
                  Pay ₹100 Now
                </button>
              )}
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
            <div className="h-[77vh] w-2/6 flex flex-col items-center rounded-t-3xl bg-green-600 shadow-lg">
              <h2 className="mt-10 text-3xl font-bold text-white">Premium</h2>
              <p className="mt-4 text-white text-lg">100 Mbps speed</p>
              <p className="mt-2 text-white text-lg">1 TB data cap</p>
              <p className="mt-2 text-white text-lg">₹200/month</p>
              {isLoading ? (
                <button
                  className="bg-fuchsia-800 h-10 mt-8 text-white"
                  disabled
                >
                  Processing...
                </button>
              ) : (
                <button
                  className="bg-fuchsia-800 h-10 mt-8 text-white px-4 py-2 rounded-lg"
                  onClick={() => handlePayment(200)}
                >
                  Pay ₹200 Now
                </button>
              )}
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
            <div className="h-[70vh] w-2/6 flex flex-col items-center mt-10 rounded-t-3xl ml-3 bg-blue-600 shadow-lg">
              <h2 className="mt-10 text-3xl font-bold text-white">Hype</h2>
              <p className="mt-4 text-white text-lg">200 Mbps speed</p>
              <p className="mt-2 text-white text-lg">2 TB data cap</p>
              <p className="mt-2 text-white text-lg">₹300/month</p>
              {isLoading ? (
                <button
                  className="bg-fuchsia-800 h-10 mt-8 text-white"
                  disabled
                >
                  Processing...
                </button>
              ) : (
                <button
                  className="bg-fuchsia-800 h-10 mt-8 text-white px-4 py-2 rounded-lg"
                  onClick={() => handlePayment(300)}
                >
                  Pay ₹300 Now
                </button>
              )}
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackagesPage;
