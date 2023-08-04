import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Support from "../components/Support/Support";
import Footer from "../components/Footer/Footer";
import CheckOut from "../components/CheckOut/CheckOut";

const ChekOutScreen = () => {
  return (
    <div className="cart_container">
      <Navbar />
      <CheckOut />
      <Support />
      <div className="footer_wrapper">
        <Footer />
      </div>
      <div className="rights">
        <h6>2023 furino. All rights reserved</h6>
      </div>
    </div>
  );
};

export default ChekOutScreen;
