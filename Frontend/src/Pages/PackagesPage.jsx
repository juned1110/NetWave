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
<<<<<<< HEAD
<<<<<<< HEAD
    const orderURL = "https://net-wave-frontend.vercel.app/api/payment/order";
=======
    const orderURL = "http://localhost:5000/api/payment/order";
>>>>>>> parent of 29bae9f (bug fix)
=======
    const orderURL = "https://net-wave-nu.vercel.app/api/payment/order";
>>>>>>> parent of a20144b ( bug fix)
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await axios.post(orderURL, {
        amount,
        currency: "INR",
        receipt: `receipt#${amount}`,
        payment_capture: 1,
      });
      console.log("API", data);

      if (!window.Razorpay) {
        setError("Razorpay SDK not loaded.");
        return;
      }

      const options = {
        key: "rzp_test_fyc5rJqH7juhKk",
        amount: data.amount,
        name: "NetWave",
        description: "Test transaction",
        order_id: data.id,
        handler: function (response) {
          alert(`Payment ID: ${response.razorpay_payment_id}`);
          alert(`Order ID: ${response.razorpay_order_id}`);
          alert(`Signature: ${response.razorpay_signature}`);
        },
        theme: {
          color: "#f37254",
        },
        method: {
          upi: true,
          card: true,
          netbanking: true,
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
      <div className="flex justify-center items-center h-screen text-5xl font-bold">
        <div className="h-[30vh]">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <GoogleFontLoader fonts={[{ font: "Lilita One", weights: [400, 700] }]} />
      <div className="w-full h-screen relative bg-gray-100 flex flex-col items-center pt-10">
        <div
          className="w-full text-center text-4xl font-bold mb-8 text-gray-800"
          style={{ fontFamily: "Lilita One" }}
        >
          Pricing Plans
        </div>
        <div className="flex justify-evenly w-full px-10">
          <div className="bg-white rounded-lg shadow-lg p-8 w-80 transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Basic</h2>
            <p className="text-gray-600 mb-2">50 Mbps speed</p>
            <p className="text-gray-600 mb-2">500 GB data capacity</p>
            <p className="text-gray-600 mb-4">₹100/month</p>
            {isLoading ? (
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded"
                disabled
              >
                Processing...
              </button>
            ) : (
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 transition-all"
                onClick={() => handlePayment(100)}
              >
                Pay ₹100 Now
              </button>
            )}
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 w-80 transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Premium</h2>
            <p className="text-gray-600 mb-2">100 Mbps speed</p>
            <p className="text-gray-600 mb-2">1 TB data capacity</p>
            <p className="text-gray-600 mb-4">₹200/month</p>
            {isLoading ? (
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded"
                disabled
              >
                Processing...
              </button>
            ) : (
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 transition-all"
                onClick={() => handlePayment(200)}
              >
                Pay ₹200 Now
              </button>
            )}
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 w-80 transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Hype</h2>
            <p className="text-gray-600 mb-2">200 Mbps speed</p>
            <p className="text-gray-600 mb-2">2 TB data capacity</p>
            <p className="text-gray-600 mb-4">₹300/month</p>
            {isLoading ? (
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded"
                disabled
              >
                Processing...
              </button>
            ) : (
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 transition-all"
                onClick={() => handlePayment(300)}
              >
                Pay ₹300 Now
              </button>
            )}
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default PackagesPage;
