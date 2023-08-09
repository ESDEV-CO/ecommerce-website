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
        {/* <div className="product_info new">
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
            <div className="product_container">
              <div className="product_info">
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
              </div>
              <div className="product_info_cart">
                <button>Add to cart</button>
                <div className="info_cart_btn">
                  <span>
                    <BiSolidShareAlt /> Share
                  </span>
                  <Link to={"/compare"} className="compare_link">
                    <MdOutlineCompareArrows /> Compare
                  </Link>
                  <span>
                    <AiFillHeart /> Like
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Link
        to={"/shop"}
        onClick={() => window.scrollTo(0, 0)}
        className="show_more"
      >
        Show More
      </Link>
    </div>
  );
};

export default Products;
