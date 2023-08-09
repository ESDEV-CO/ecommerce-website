import React from "react";
import "./Category.css";

const Category = () => {
  return (
    <div className="category">
      <h3>Browse the Range</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rem!
      </p>
      <div className="category_data">
        <div className="category_data_img">
          <img src={require("../../assets/dining.png")} alt="dining" />
          <h5>Dining</h5>
        </div>
        <div className="category_data_img">
          <img src={require("../../assets/living-room.png")} alt="living" />
          <h5>Living</h5>
        </div>
        <div className="category_data_img">
          <img src={require("../../assets/bedroom.png")} alt="Bedroom" />
          <h5>Bedroom</h5>
        </div>
      </div>
    </div>
  );
};

export default Category;
