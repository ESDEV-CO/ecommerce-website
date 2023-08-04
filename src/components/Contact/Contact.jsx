import React from "react";
import "./Contact.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact">
      <section className="contact_header">
        <div className="header_bg">
          <img src={require("../../assets/page_bg.png")} alt="page bg" />
        </div>
        <div className="header_info">
          <img src={require("../../assets/logo.png")} alt="logo" />
          <h2>Contact</h2>
          <span>
            Home <MdOutlineKeyboardArrowRight /> <span>Contact</span>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Contact;