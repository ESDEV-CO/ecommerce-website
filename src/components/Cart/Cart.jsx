import React from "react";
import "./Cart.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Table from "../Table/Table";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="cart">
      <section className="contact_header">
        <div className="header_bg">
          <img src={require("../../assets/page_bg.png")} alt="page bg" />
        </div>
        <div className="header_info">
          <img src={require("../../assets/logo.png")} alt="logo" />
          <h2>Cart</h2>
          <span>
            Home <MdOutlineKeyboardArrowRight /> <span>Cart</span>
          </span>
        </div>
      </section>
      <section className="cart_data">
        <div className="cart_data_table">
          <Table />
        </div>
        <div className="cart_data_card">
          <h3>Cart Totals</h3>
          <div className="card_subtotal">
            <h6>Subtotal</h6>
            <p>250,000.00</p>
          </div>
          <div className="card_total">
            <h6>Total</h6>
            <p>250,000.00</p>
          </div>
          <Link to="/checkout" className="card_btn">
            Check Out
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Cart;
