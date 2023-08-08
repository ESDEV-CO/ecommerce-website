import React from "react";
import SideCart from "../components/SideCart/SideCart";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const SideCartScreen = () => {
  return (
    <div className="store_container">
      <Navbar />
      <SideCart />
      <div className="footer_wrapper">
        <Footer />
      </div>
      <div className="rights">
        <h6>2023 furino. All rights reserved</h6>
      </div>
    </div>
  );
};

export default SideCartScreen;
