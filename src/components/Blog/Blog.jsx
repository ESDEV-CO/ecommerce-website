import React from "react";
import "./Blog.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Blog = () => {
  return (
    <div>
      <section className="contact_header">
        <div className="header_bg">
          <img src={require("../../assets/page_bg.png")} alt="page bg" />
        </div>
        <div className="header_info">
          <img src={require("../../assets/logo.png")} alt="logo" />
          <h2>Blog</h2>
          <span>
            Home <MdOutlineKeyboardArrowRight /> <span>Blog</span>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Blog;
