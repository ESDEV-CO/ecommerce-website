import React from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Range from './components/Range/Range'
import Products from "./components/Products/Products";
import Carousel from "./components/Carousel/Carousel";


const App = () => {
  return (
    <div className="store_container">
      <Navbar />
      <Hero />
      <Range />
      <Products />
      <Carousel />
    </div>
  );
};

export default App;
