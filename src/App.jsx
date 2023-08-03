import React from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Carousel from "./components/Carousel/Carousel";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";
import Share from "./components/Share/Share";


const App = () => {
  return (
    <div className="store_container">
      <Navbar />
      <Hero />
      <Category />
      <Products />
      <Carousel />
      <Share />
      <div className="footer_wrapper">
        <Footer />
      </div>
      <div className="rights">
        <h6>2023 furino. All rights reserved</h6>
      </div>
    </div>
  );
};

export default App;
