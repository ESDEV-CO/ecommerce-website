import React from "react";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Products from "./components/Products/Products";
import Carousel from "./components/Carousel/Carousel";
import Share from "./components/Share/Share";

const Home = () => {
  return (
    <div className="home_page">
      <Hero />
      <Category />
      <Products />
      {/* <Carousel />
            <Share /> */}
    </div>
  );
};

export default Home;
