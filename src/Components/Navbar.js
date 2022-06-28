import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar flex justify-between items-center w-full h-10">
      <div className="">PHOENIX</div>
      <nav className="navbar-content w-4/12">
        <ul className="flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <button>Contact me</button>
    </div>
  );
}

export default Navbar;
