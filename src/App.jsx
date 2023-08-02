import React from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Carousel from "./components/Carousel/Carousel";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <div className="store_container">
      <Navbar />
      <Hero />
      <Category />
      <Products />
      <Carousel />
      <Footer />
    </div>
  );
};

export default App;
