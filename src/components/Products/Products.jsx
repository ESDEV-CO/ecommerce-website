import React from "react";
import "./Products.css";
import { BiSolidShareAlt } from "react-icons/bi";
import { MdOutlineCompareArrows } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ProductsData } from "./ProductsData";

const Products = () => {
  return (
    <div className="products">
      <h2>Our Products</h2>
      <div className="all_products">
        {/* <Link to="/single" className="product_info">
          <img src={require("../../assets/sylthe.png")} alt="product" />
          <div className="product_info_des">
            <h4>Syltherine</h4>
            <h6>Stylish cafe chair</h6>
            <div className="side_by_side">
              <h5>Rp 2.500.000</h5>
              <s className="sale30">Rp 3.500.000</s>
            </div>
          </div>
        </Link>
        <div className="product_info">
          <img src={require("../../assets/leviosa.png")} alt="product" />
          <div className="product_info_des">
            <h4>Leviosa</h4>
            <h6>Stylish cafe chair</h6>
            <div className="side_by_side">
              <h5>Rp 2.500.000</h5>
            </div>
          </div>
          <div className="product_info_cart">
            <button>Add to cart</button>
            <div className="info_cart_btn">
              <span>
                <BiSolidShareAlt /> Share
              </span>
              <span>
                <MdOutlineCompareArrows /> Compare
              </span>
              <span>
                <AiFillHeart /> Like
              </span>
            </div>
          </div>
        </div>
        <div className="product_info">
          <img src={require("../../assets/lolito.png")} alt="product" />
          <div className="product_info_des">
            <h4>Lolito</h4>
            <h6>Luxury big sofa </h6>
            <div className="side_by_side">
              <h5>Rp 7.000.000</h5>
              <s className="sale50">Rp 14.000.000</s>
            </div>
          </div>
        </div>
        <div className="product_info new">
          <img src={require("../../assets/respira.png")} alt="product" />
          <div className="product_info_des">
            <h4>Respira</h4>
            <h6>Outdoor bar table and stool</h6>
            <div className="side_by_side">
              <h5>Rp 500.000</h5>
            </div>
          </div>
        </div>
        <div className="product_info">
          <img src={require("../../assets/grifo.png")} alt="product" />
          <div className="product_info_des">
            <h4>Grifo</h4>
            <h6>night Lamp</h6>
            <div className="side_by_side">
              <h5>Rp 1.500.000</h5>
            </div>
          </div>
        </div>
        <div className="product_info new">
          <img src={require("../../assets/muggo.png")} alt="product" />
          <div className="product_info_des">
            <h4>Muggo</h4>
            <h6>Small mug</h6>
            <div className="side_by_side">
              <h5>Rp 150.000</h5>
            </div>
          </div>
        </div>
        <div className="product_info">
          <img src={require("../../assets/pingky.png")} alt="product" />
          <div className="product_info_des">
            <h4>Pingky</h4>
            <h6>cute bed set</h6>
            <div className="side_by_side">
              <h5>Rp 7.000.000</h5>
              <s className="sale50">Rp 14.000.000</s>
            </div>
          </div>
        </div>
        <div className="product_info new">
          <img src={require("../../assets/potty.png")} alt="product" />
          <div className="product_info_des">
            <h4>Potty</h4>
            <h6>Minimalist flower pot</h6>
            <div className="side_by_side">
              <h5>Rp 500.000</h5>
            </div>
          </div>
        </div> */}
        {ProductsData.map((itm) => {
          return (
            <Link
              to={"/single"}
              onClick={() => window.scrollTo(100, 100)}
              className="product_info new"
            >
              <img src={itm?.image} alt="product" />
              <div className="product_info_des">
                <h4>{itm?.name}</h4>
                <h6>{itm?.description}</h6>
                <div className="side_by_side">
                  <h5>{itm?.full_price}</h5>
                  <s className={`${itm?.discount_price ? "sale50" : "new"}`}>
                    {itm?.discount_price}
                  </s>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <button className="show_more">Show More</button>
    </div>
  );
};

export default Products;
