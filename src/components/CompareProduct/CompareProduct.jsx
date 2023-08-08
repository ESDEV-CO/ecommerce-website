import React from "react";
import "./CompareProduct.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const CompareProduct = () => {
  return (
    <div>
      <section className="contact_header">
        <div className="header_bg">
          <img src={require("../../assets/page_bg.png")} alt="page bg" />
        </div>
        <div className="header_info">
          <img src={require("../../assets/logo.png")} alt="logo" />
          <h2>Comparison</h2>
          <span>
            Home <MdOutlineKeyboardArrowRight /> <span>Comparison</span>
          </span>
        </div>
      </section>
    </div>
  );
};

export default CompareProduct;
