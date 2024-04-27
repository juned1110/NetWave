import React from "react";
import GoogleFontLoader from "react-google-font-loader";

const PackagesPage = () => {
  return (
    <div>
      <GoogleFontLoader fonts={[{ font: "Oswald", weights: [400, 700] }]} />
      <div style={{ fontFamily: "Oswald, sans-serif" }}>PackagesPage</div>
    </div>
  );
};

export default PackagesPage;
