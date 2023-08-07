import React from "react";
import "./Blog.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";
import { BsFillCalendarFill } from "react-icons/bs";
import { BsFillTagFill } from "react-icons/bs";

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
      <section className="blog">
        <div className="blog_data">
          <div className="blog_card">
            <img src={require("../../assets/blog1.png")} alt="Blog1" />
            <div className="blog_card_logo">
              <span>
                <BiSolidUser />
                Admin
              </span>
              <span>
                <BsFillCalendarFill />
                14 Oct 2022
              </span>
              <span>
                <BsFillTagFill />
                Wood
              </span>
            </div>
            <h3>Going all-in with millennial design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <h6>Read more</h6>
          </div>
        </div>
        <div className="blog_sidebar">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut,
            nihil? Quis, rem ad? Quas rem voluptatum nisi, natus expedita nobis
            temporibus! Quibusdam ad eligendi, quis debitis assumenda beatae
            magnam minus?
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
