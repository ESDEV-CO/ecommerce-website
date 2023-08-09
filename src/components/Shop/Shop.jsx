import React from "react";
import "./Shop.css";
import { BiSolidShareAlt } from "react-icons/bi";
import { MdOutlineCompareArrows } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div className="shop_page">
      <section className="shop_header">
        <h2>Shop</h2>
        <span>
          Home <MdOutlineKeyboardArrowRight /> <span>Shop</span>
        </span>
        <img src={require("../../assets/product_bg.png")} alt="" />

        <div className="header_filter">
          <div className="filter_child">
            <div className="filter_grandchild1">
              <span>
                <img src={require("../../assets/filter.png")} alt="" />
                Filter
              </span>
              <span>
                <img src={require("../../assets/round_icon.png")} alt="" />
              </span>
              <span>
                <img src={require("../../assets/list_icon.png")} alt="" />
              </span>
            </div>
            <div className="filter_grandchild2">
              <h6>Showing 1–16 of 32 results</h6>
            </div>
          </div>
          <div className="filter_child">
            <div className="filter_grandchild11">
              <h5>Show</h5>
              <button className="filter_btn">16</button>
            </div>
            <div className="filter_grandchild11">
              <h5>Short By </h5>
              <button className="filter_btn right_padding">Default</button>
            </div>
          </div>
        </div>
      </section>
      <section className="shop_products">
        <div className="all_products mt_0">
          <Link to={"/single"} className="product_info">
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
            <img src={require("../../assets/sylthe.png")} alt="product" />
            <div className="product_info_des">
              <h4>Syltherine</h4>
              <h6>Stylish cafe chair</h6>
              <div className="side_by_side">
                <h5>Rp 2.500.000</h5>
                <s className="sale30">Rp 3.500.000</s>
              </div>
            </div>
          </div>
          <div className="product_info">
            <img src={require("../../assets/leviosa.png")} alt="product" />
            <div className="product_info_des">
              <h4>Leviosa</h4>
              <h6>Stylish cafe chair</h6>
              <div className="side_by_side">
                <h5>Rp 2.500.000</h5>
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
            <img src={require("../../assets/sylthe.png")} alt="product" />
            <div className="product_info_des">
              <h4>Syltherine</h4>
              <h6>Stylish cafe chair</h6>
              <div className="side_by_side">
                <h5>Rp 2.500.000</h5>
                <s className="sale30">Rp 3.500.000</s>
              </div>
            </div>
          </div>
          <div className="product_info">
            <img src={require("../../assets/leviosa.png")} alt="product" />
            <div className="product_info_des">
              <h4>Leviosa</h4>
              <h6>Stylish cafe chair</h6>
              <div className="side_by_side">
                <h5>Rp 2.500.000</h5>
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
            <img src={require("../../assets/sylthe.png")} alt="product" />
            <div className="product_info_des">
              <h4>Syltherine</h4>
              <h6>Stylish cafe chair</h6>
              <div className="side_by_side">
                <h5>Rp 2.500.000</h5>
                <s className="sale30">Rp 3.500.000</s>
              </div>
            </div>
          </div>
          <div className="product_info">
            <img src={require("../../assets/leviosa.png")} alt="product" />
            <div className="product_info_des">
              <h4>Leviosa</h4>
              <h6>Stylish cafe chair</h6>
              <div className="side_by_side">
                <h5>Rp 2.500.000</h5>
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
        </div>
        <div className="shop_products_btns">
          <button className="product_btn_active ">1</button>
          <button className="product_btn">2</button>
          <button className="product_btn">3</button>
          <button className="product_btn">Next</button>
        </div>
      </section>
    </div>
  );
};

export default Shop;
