import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "../screen/HomeScreen";
import ShopScreen from "../screen/ShopScreen";
import ContactScreen from "../screen/ContactScreen";
import CartScreen from "../screen/CartScreen";
import BlogScreen from "../screen/BlogScreen";
import ChekOutScreen from "../screen/ChekOutScreen";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/shop" element={<ShopScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/blog" element={<BlogScreen />} />
        <Route path="/checkout" element={<ChekOutScreen />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
