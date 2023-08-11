import React from "react";
import "./Blog.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";
import { BsFillCalendarFill } from "react-icons/bs";
import { BsFillTagFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

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
            <h3>Exploring new ways of decorating</h3>
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
            <button className="read_more">Read more</button>
          </div>
          <div className="blog_card">
            <img src={require("../../assets/blog2.png")} alt="Blog2" />
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
            <h3>Handmade pieces that took time to make</h3>
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
            <button className="read_more">Read more</button>
          </div>
          <div className="blog_card">
            <img src={require("../../assets/blog3.png")} alt="Blog3" />
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
            <button className="read_more">Read more</button>
          </div>
          <div className="shop_products_btns ">
            <button className="product_btn product_btn_active ">1</button>
            <button className="product_btn">2</button>
            <button className="product_btn">3</button>
            <button className="product_btn">Next</button>
          </div>
        </div>
        <div className="blog_sidebar">
          <div className="blog_sidebar_search">
            <div className="search_bar">
              <input type="text" />
              <button className="search_btn">
                <BiSearch />
              </button>
            </div>
          </div>
          <div className="blog_sidebar_categories">
            <h4>Categories</h4>
            <span className="sidebar_categories">
              <span>Crafts</span> <span>2</span>
            </span>
            <span className="sidebar_categories">
              <span>Design</span> <span>8</span>
            </span>
            <span className="sidebar_categories">
              <span>Handmade</span> <span>7</span>
            </span>
            <span className="sidebar_categories">
              <span>Interior </span> <span>1</span>
            </span>
            <span className="sidebar_categories">
              <span>Wood</span> <span>6</span>
            </span>
          </div>
          <div className="blog_sidebar_recent">
            <h4>Recent Posts</h4>
            <div className="sidebar_recents">
              <img src={require("../../assets/recent1.png")} alt="recent1" />
              <div className="recent_info">
                <span>Going all-in with millennial design</span>
                <span>03 Aug 2022</span>
              </div>
            </div>
            <div className="sidebar_recents">
              <img src={require("../../assets/recent2.png")} alt="recent2" />
              <div className="recent_info">
                <span>Exploring new ways of decorating</span>
                <span>03 Aug 2022</span>
              </div>
            </div>
            <div className="sidebar_recents">
              <img src={require("../../assets/recent3.png")} alt="recent3" />
              <div className="recent_info">
                <span>Handmade pieces that took time to make</span>
                <span>03 Aug 2022</span>
              </div>
            </div>
            <div className="sidebar_recents">
              <img src={require("../../assets/recent4.png")} alt="recent4" />
              <div className="recent_info">
                <span>Modern home in Milan</span>
                <span>03 Aug 2022</span>
              </div>
            </div>
            <div className="sidebar_recents">
              <img src={require("../../assets/recent5.png")} alt="recent5" />
              <div className="recent_info">
                <span>Colorful office redesign</span>
                <span>03 Aug 2022</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
