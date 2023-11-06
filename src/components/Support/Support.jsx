import React from "react";
import "./Support.css";
import { BsTrophy } from "react-icons/bs";
import { BsPatchCheck } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";

const Support = () => {
  return (
    <div className="support">
      <div className="support_wrapper">
        <div className="support_data">
          <span className="support_logo">
            <BsTrophy />
          </span>
          <span>
            <h5>High Quality</h5>
            <p>crafted from top materials</p>
          </span>
        </div>
        <div className="support_data">
          <span className="support_logo">
            <BsPatchCheck />
          </span>
          <span>
            <h5>Warranty Protection</h5>
            <p>Over 2 years</p>
          </span>
        </div>
        <div className="support_data">
          <span className="support_logo">
            <LiaShippingFastSolid />
          </span>
          <span>
            <h5>Free Shipping</h5>
            <p>Order over 150 $</p>
          </span>
        </div>
        <div className="support_data">
          <span className="support_logo">
            <BiSupport />
          </span>
          <span>
            <h5>24 / 7 Support</h5>
            <p>Dedicated support</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Support;
