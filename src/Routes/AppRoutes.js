import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "../screen/HomeScreen";
import ShopScreen from "../screen/ShopScreen";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/shop" element={<ShopScreen />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
