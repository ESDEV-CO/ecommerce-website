import React from "react";
import Blog from "../components/Blog/Blog";
import Navbar from "../components/Navbar/Navbar";
import Support from "../components/Support/Support";
import Footer from "../components/Footer/Footer";

const BlogScreen = () => {
  return (
    <div>
      <div className="blog_container">
        <Navbar />
        <Blog />
        <Support />
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

export default BlogScreen;
