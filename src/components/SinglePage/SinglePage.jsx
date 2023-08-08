import React from "react";
import "./SinglePage.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsFillCircleFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const SinglePage = () => {
  return (
    <div className="singlepage">
      <section className="page_header">
        <span className="header_span">
          Home
          <span className="page_header_span">
            <MdOutlineKeyboardArrowRight />
          </span>
          Shop
          <span className="page_header_span">
            <MdOutlineKeyboardArrowRight />
          </span>
          |<span className="page_header_span">Asgaard Sofa</span>
        </span>
      </section>
      <section className="single_page_product">
        <div className="single_page_product_pictures">
          <div className="side_pictures">
            <img src={require("../../assets/singleside1.png")} alt="side1" />
            <img src={require("../../assets/singleside2.png")} alt="side2" />
            <img src={require("../../assets/singleside3.png")} alt="side3" />
            <img src={require("../../assets/singleside4.png")} alt="side4" />
          </div>
          <div className="main_picture">
            <img src={require("../../assets/singleimg1.png")} alt="main" />
          </div>
        </div>
        <div className="single_page_product_info">
          <h2>Asgaard sofa</h2>
          <h4>Rs. 250,000.00</h4>
          <div className="user_review">
            <span className="stars">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
            </span>
            <span className="customer_review"> 5 Customer Review</span>
          </div>
          <p>
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <h6>Size</h6>
          <div className="single_size_btn">
            <button className="product_btn_active size_btn">L</button>
            <button className="product_btn size_btn">XL</button>
            <button className="product_btn size_btn">XS</button>
          </div>
          <h6>Color</h6>
          <div className="single_clr_btn">
            <button style={{ color: "#816DFA", fontSize: "1.5rem" }}>
              <BsFillCircleFill />
            </button>
            <button style={{ color: "black", fontSize: "1.5rem" }}>
              <BsFillCircleFill />
            </button>
            <button style={{ color: "#B88E2F", fontSize: "1.5rem" }}>
              <BsFillCircleFill />
            </button>
          </div>
          <div className="single_addtocart">
            <button className="card_btn plus_minus">
              <span>-</span> 1<span>+</span>
            </button>
            <button className="card_btn">Add to Cart</button>
            <button className="card_btn">+ Compare</button>
          </div>
        </div>
      </section>
      <section className="social">
        <span className="social_info">SKU : SS001</span>
        <span className="social_info">Category : Sofas</span>
        <span className="social_info">Tags : Sofa, Chair, Home, Shop</span>
        <span className="social_info">
          Share :
          <span className="social_logo">
            <FaFacebook />
            <BsLinkedin />
            <AiFillTwitterCircle />
          </span>
        </span>
      </section>
      <section className="description">
        <div className="description_heading">
          <h4>Description</h4>
          <h4>Additional Information</h4>
          <h4>Reviews [5]</h4>
        </div>
        <div className="description_para">
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
        <div className="description_img">
          <img src={require("../../assets/sofa1.png")} alt="sofa1" />
          <img src={require("../../assets/sofa2.png")} alt="sofa2" />
        </div>
      </section>
      <section className="related_products">
        <h3>Related Products</h3>
        <div className="related_wrapper">
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
        <button className="show_more">Show More</button>
      </section>
    </div>
  );
};

export default SinglePage;
