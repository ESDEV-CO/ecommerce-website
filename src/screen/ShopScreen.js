import React from "react";
import Shop from "../components/Shop/Shop";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
function ShopScreen() {
  return (
    <div className="store_container">
      <Navbar />
      <Shop />
      <div className="footer_wrapper">
        <Footer />
      </div>
      <div className="rights">
        <h6>2023 furino. All rights reserved</h6>
      </div>
    </div>
  );
}

export default ShopScreen;
