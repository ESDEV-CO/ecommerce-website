import React from "react";
import "./CheckOut.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const CheckOut = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="checkout">
      <section className="contact_header">
        <div className="header_bg">
          <img src={require("../../assets/page_bg.png")} alt="page bg" />
        </div>
        <div className="header_info">
          <img src={require("../../assets/logo.png")} alt="logo" />
          <h2>Chekout</h2>
          <span>
            Home <MdOutlineKeyboardArrowRight /> <span>Checkout</span>
          </span>
        </div>
      </section>
      <section className="checkout_data">
        <div className="contact_data_form">
          <h3>Billing Details</h3>
          <form className="contact_data_form" onSubmit={handleSubmit}>
            <div className="user_name ">
              <label className="form_label width_50">
                First Name
                <input type="text" />
              </label>
              <label className="form_label width_50">
                Last Name
                <input type="text" />
              </label>
            </div>
            <label className="form_label">
              Company Name (Optional)
              <input type="text" />
            </label>
            <label className="form_label">
              Country / Region
              <select className="select">
                <option value="srilanka">Sri Lanka</option>
                <option value="canada">Canada</option>
              </select>
            </label>
            <label className="form_label">
              Town / City
              <input type="text" />
            </label>
            <label className="form_label">
              Province
              <select className="select">
                <option value="western">Western Province</option>
                <option value="canada">Western Province</option>
              </select>
            </label>
            <label className="form_label">
              Zip code
              <input type="text" />
            </label>
            <label className="form_label">
              Phone
              <input type="text" />
            </label>
            <label className="form_label">
              Email Address
              <input type="email" />
            </label>
            <label className="form_label">
              <input type="text" placeholder="Additional Information" />
            </label>
          </form>
        </div>
        <div className="contact_data_info">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
            harum tenetur dolorum ea reiciendis facilis error! Quis, facere vero
            possimus eaque cum beatae quisquam est voluptas? Amet, repudiandae!
            Illo, labore!
          </p>
        </div>
      </section>
    </div>
  );
};

export default CheckOut;
