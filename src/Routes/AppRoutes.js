import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../screen/HomePage";
import Home from "../Home";
import Shop from "../components/Shop/Shop";
import Contact from "../components/Contact/Contact";
import Blog from "../components/Blog/Blog";
import CheckOut from "../components/CheckOut/CheckOut";
import SinglePage from "../components/SinglePage/SinglePage";
import Cart from "../components/Cart/Cart";
import CompareProduct from "../components/CompareProduct/CompareProduct";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} >
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/single" element={<SinglePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/compare" element={<CompareProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
