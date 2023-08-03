import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Cart from "../components/Cart/Cart";

const CartScreen = () => {
  return (
    <div>
      <div className="store_container">
        <Navbar />
        <Cart />
        <div className="footer_wrapper">
          <Footer />
        </div>
        <div className="rights">
          <h6>2023 furino. All rights reserved</h6>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
