import React, { useState } from "react";
import "./Navbar.css";
import { FaRegUser } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ImMenu } from "react-icons/im";
import { Link } from "react-router-dom";
import SideCart from "../SideCart/SideCart";
import MobNav from "../MobNav/MobNav";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="navbar_logo">
          <span className="logo_img">
            <img src={require("../../assets/logo.png")} alt="logo" />
          </span>
          <Link to="/" className="logo_name">
            Furniro
          </Link>
        </div>
        <ul className="navbar_links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="navbar_icons">
          <button>
            <FaRegUser />
          </button>
          <button>
            <BsSearch />
          </button>
          <button>
            <AiOutlineHeart />
          </button>
          <button onClick={() => setToggle(!toggle)}>
            <AiOutlineShoppingCart />
          </button>
        </div>
        <div className="nav_hamburger">
          <button className="nav_menu_btn" onClick={() => setMenu(!menu)}>
            <ImMenu />
          </button>
        </div>
      </div>
      <div className="toggle_sidebar">{toggle && <SideCart />}</div>
      <div className="toggle_menu">{menu && <MobNav />}</div>
    </>
  );
};

export default Navbar;
