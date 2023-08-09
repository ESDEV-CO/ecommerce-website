import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero_section">
      <div className="hero_img">
        <img src={require("../../assets/hero_bg.png")} alt="hero bg" />
      </div>
      <div className="hero_info">
        <h6>New Arrival</h6>
        <h1>Discover our New Collection</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
          dolorum nostrum minima odio mollitia sed soluta.
        </p>
        <button className="filled_btn">Buy Now</button>
      </div>
    </div>
  );
};

export default Hero;
