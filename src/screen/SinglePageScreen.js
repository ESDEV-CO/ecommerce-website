import React from "react";
import SinglePage from "../components/SinglePage/SinglePage";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const SinglePageScreen = () => {
  return (
    <div className="store_container">
      <Navbar />
      <SinglePage />
      <div className="footer_wrapper">
        <Footer />
      </div>
      <div className="rights">
        <h6>2023 furino. All rights reserved</h6>
      </div>
    </div>
  );
};

export default SinglePageScreen;
