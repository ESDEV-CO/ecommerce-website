import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo">
        <h4>Funiro.</h4>
        <p>
          400 University Drive Suite 200 Coral <br /> Gables,
          <br /> FL 33134 USA
        </p>
      </div>
      <div className="footer_nav">
        <ul className="footer_links">
          <h6>Links</h6>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="footer_links">
          <h6>Help</h6>
          <li>Payment Options</li>
          <li>Returns</li>
          <li>Privacy Policy</li>
        </ul>
        <div className="footer_links">
          <h6>News Letter</h6>
          <div className="email_sub">
            <input type="text" placeholder="Enter Your Email Address" />
            <button className="email_btn">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
