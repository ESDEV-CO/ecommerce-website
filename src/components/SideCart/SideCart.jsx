import React from "react";
import "./SideCart.css";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";

const SideCart = () => {
  return (
    <div className="sidecart">
      <div className="sidecart_heading">
        <h4>Shopping Cart</h4>
        {/* <Link to="/single"> */}
        {/* <img loading="lazy" src={require("../../assets/crossbag.png")} alt="cross" /> */}
        {/* </Link> */}
      </div>
      <div className="horizontal_line"></div>
      <div className="sidecart_data">
        <div className="side_data_imgs">
          <div className="side_imgs_child">
            <div className="side_imgs_img">
              <img
                loading="lazy"
                src={require("../../assets/side1.png")}
                alt="side1"
              />
            </div>
            <div className="side_imgs_info">
              <h6>Asgaard sofa</h6>
              <span>1&nbsp; x &nbsp; </span>
              <span className="side_price">Rs. 250,000.00</span>
            </div>
            <div className="side_imgs_btn">
              <MdCancel />
            </div>
          </div>
          <div className="side_imgs_child">
            <div className="side_imgs_img">
              <img
                loading="lazy"
                src={require("../../assets/side2.png")}
                alt="side1"
              />
            </div>
            <div className="side_imgs_info">
              <h6>Casaliving Wood</h6>
              <span>1&nbsp; x &nbsp; </span>
              <span className="side_price">Rs. 270,000.00</span>
            </div>
            <div className="side_imgs_btn">
              <MdCancel />
            </div>
          </div>
        </div>
        <div className="side_data_total">
          <h6>Subtotal</h6>
          <span>Rs. 520,000.00</span>
        </div>
        <div className="horizontal_line width_100"></div>

        <div className="sidecart_btns">
          <Link to="/cart" className="sidecart_btn">
            Cart
          </Link>
          <Link to="/checkout" className="sidecart_btn">
            Chekout
          </Link>
          <Link to="/compare" className="sidecart_btn">
            Comparison
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideCart;
