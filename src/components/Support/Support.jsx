import React from "react";
import "./Support.css";

const Support = () => {
  return (
    <div className="shop_support">
      <div className="support_wrapper">
        <div className="support_data">
          <span>
            <img src={require("../../assets/trofy.png")} alt="" />
          </span>
          <span>
            <h4>High Quality</h4>
            <p>crafted from top materials</p>
          </span>
        </div>
        <div className="support_data">
          <span>
            <img src={require("../../assets/done.png")} alt="" />
          </span>
          <span>
            <h4>Warranty Protection</h4>
            <p>Over 2 years</p>
          </span>
        </div>
        <div className="support_data">
          <span>
            <img src={require("../../assets/shipping.png")} alt="" />
          </span>
          <span>
            <h4>Free Shipping</h4>
            <p>Order over 150 $</p>
          </span>
        </div>
        <div className="support_data">
          <span>
            <img src={require("../../assets/call.png")} alt="" />
          </span>
          <span>
            <h4>24 / 7 Support</h4>
            <p>Dedicated support</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Support;
