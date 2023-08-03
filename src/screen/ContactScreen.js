import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";

const ContactScreen = () => {
  return (
    <div>
      <div className="store_container">
        <Navbar />
        <Contact />
        <div className="footer_wrapper">
          <Footer />
        </div>
        <div className="rights">
          <h6>2023 furino. All rights reserved</h6>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
