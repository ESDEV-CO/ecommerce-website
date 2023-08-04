import React from "react";
import "./Contact.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";

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
      <section className="contact_title">
        <h3>Get In Touch With Us</h3>
        <p>
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do
          Not Hesitate!
        </p>
        <div className="contact_data">
          <div className="contact_data_info">
            <div className="data_info_child">
              <span className="data_info_child_logo">
                <FaLocationDot />
              </span>
              <div className="data_info_child_data">
                <h5>Address</h5>
                <span>
                  236 5th SE Avenue, New <br /> York NY10000, United <br />
                  States
                </span>
              </div>
            </div>
            <div className="data_info_child">
              <span className="data_info_child_logo">
                <BsFillTelephoneFill />
              </span>
              <div className="data_info_child_data">
                <h5>Phone</h5>
                <span>
                  Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
                </span>
              </div>
            </div>
            <div className="data_info_child">
              <span className="data_info_child_logo">
                <BsFillClockFill />
              </span>
              <div className="data_info_child_data">
                <h5>Working Time</h5>
                <span>
                  Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 -
                  21:00
                </span>
              </div>
            </div>
          </div>
          <form className="contact_data_form">
            <label className="form_label">
              Your name
              <input type="text" placeholder="Abc" />
            </label>
            <label className="form_label">
              Email Address
              <input type="email" placeholder="Abc@def.com" />
            </label>
            <label className="form_label">
              Subject
              <input type="text" placeholder="This is Optional" />
            </label>
            <label className="form_label">
              Message
              <input
                style={{ height: "7.5rem", paddingBottom: "2.75rem" }}
                type="text"
                placeholder="Hi! i'd like to ask about"
              />
            </label>
            <button className="filled_btn form_btn">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
