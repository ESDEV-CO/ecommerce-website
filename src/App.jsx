import React from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";


const App = () => {
  return (
    <div className="store_container">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
