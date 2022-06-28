import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Portfolio from "../Pages/Portfolio";
import About from "../Pages/About";

function Body() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default Body;
