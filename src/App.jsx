import React from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Range from './components/Range/Range'


const App = () => {
  return (
    <div className="store_container">
      <Navbar />
      <Hero />
      <Range />
    </div>
  );
};

export default App;
