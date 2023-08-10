import React from "react";
import "./CheckOut.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosRadioButtonOn } from "react-icons/io";
import { IoMdRadioButtonOff } from "react-icons/io";

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
        <div className="checkout_data_form">
          <h3>Billing Details</h3>
          <form className="checkout_data_form" onSubmit={handleSubmit}>
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
        <div className="checkout_data_info">
          <div className="data_info_first_child">
            <span className="info_heading">
              <h4>Product</h4>
              <h4>Subtotal</h4>
            </span>
            <span className="info_product">
              <h6>
                <p>Asgaard sofa</p> x 1
              </h6>
              <h6>Rs. 250,000.00</h6>
            </span>
            <span className="info_subtotal">
              <h5>Subtotal</h5>
              <h6>Rs. 250,000.00</h6>
            </span>
            <span className="info_total">
              <h5>Total</h5>
              <h4>Rs. 250,000.00</h4>
            </span>
          </div>
          <div className="data_info_second_child">
            <span className="payment_method">
              <IoIosRadioButtonOn />
              <h6>Direct Bank Transfer</h6>
            </span>
            <p className="opacity">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <span className="payment_method opacity">
              <IoMdRadioButtonOff />
              <h6>Direct Bank Transfer</h6>
            </span>
            <span className="payment_method opacity">
              <IoMdRadioButtonOff />
              <h6>Cash On Delivery</h6>
            </span>
            <p style={{ color: "#000000" }}>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our <b>privacy policy</b>.
            </p>
            <button className="card_btn width_50_btn">Place Order</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckOut;
