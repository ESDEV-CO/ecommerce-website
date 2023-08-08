import React from "react";
import SideCart from "../components/SideCart/SideCart";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SinglePage from "../components/SinglePage/SinglePage";

const SideCartScreen = () => {
  return (
    <div className="sidebar_container">
      <Navbar />
      <div class="sidebar_single">
        <SinglePage />
      </div>
      <div class="sidebar_main">
        <SideCart />
      </div>
      <div className="footer_wrapper">
        <Footer />
      </div>
      <div className="rights">
        <h6>2023 furino. All rights reserved</h6>
      </div>
      <div class="overlay"></div>
    </div>
  );
};

export default SideCartScreen;
