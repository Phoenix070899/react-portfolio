import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  useEffect(() => {
    const listItems = document.querySelectorAll(".navbar ul li");
    listItems.forEach((item) =>
      item.addEventListener("click", changeLinkActive)
    );
    function changeLinkActive() {
      listItems.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }
  }, []);
  return (
    <div className="navbar flex justify-between items-center w-full h-20">
      <div className="font-bold text-2xl">PHOENIX.</div>
      <nav className="navbar-content flex gap-5">
        <ul className="flex justify-between items-center gap-5">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About me</Link>
          </li>
        </ul>
        <button className="px-4 py-2 rounded-md text-sm font-semibold text-white">
          Contact me
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
