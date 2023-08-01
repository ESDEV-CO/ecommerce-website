import React from "react";
import "./Navbar.css";
import { FaRegUser } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <span className="logo_img"><img src={require('../../assets/logo.png')} alt="logo" /></span>
        <span className="logo_name">Furniro</span>
      </div>
      <ul className="navbar_links">
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="navbar_icons">
        <button><FaRegUser /></button>
        <button><BsSearch /></button>
        <button><AiOutlineHeart /></button>
        <button><AiOutlineShoppingCart /></button>
      </div>
    </div>
  )
};

export default Navbar;
