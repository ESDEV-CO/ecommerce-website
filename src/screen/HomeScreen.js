import React from "react";
import Home from "../Home";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function HomeScreen() {
  return (
    <div className="store_container">
      <Navbar />
      <Home />
      {/* <div className="footer_wrapper">
        <Footer />
      </div>
      <div className="rights">
        <h6>2023 furino. All rights reserved</h6>
      </div> */}
    </div>
  );
}

export default HomeScreen;
