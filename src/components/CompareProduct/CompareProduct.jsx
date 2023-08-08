import React from "react";
import "./CompareProduct.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";

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
      <section className="comparison">
        <div className="comparison_heading">
          <div className="com_heading_child">
            <h3>Go to Product page for more Products</h3>
            <button className="view_more"> View More</button>
          </div>
          <div className="com_heading_child">
            <img src={require("../../assets/compare1.png")} alt="compare1" />
            <h4>Asgaard Sofa</h4>
            <h5>Rs. 250,000.00</h5>
            <div className="user_review">
              <span className="rating">4.7</span>
              <span className="stars">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </span>
              <span className="customer_review"> 204 Review</span>
            </div>
          </div>
          <div className="com_heading_child">
            <img src={require("../../assets/compare2.png")} alt="compare2" />
            <h4>Outdoor Sofa Set</h4>
            <h5>Rs. 224,000.00</h5>
            <div className="user_review">
              <span className="rating">4.2</span>
              <span className="stars">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </span>
              <span className="customer_review"> 145 Review</span>
            </div>
          </div>
          <div className="com_heading_child3">
            <h4>Add A Product</h4>
            <div className="product_select">
              Choose a product
              <AiOutlineDown />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompareProduct;
