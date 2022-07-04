import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function Navbar() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const listItems = document.querySelectorAll(".navbar ul li");
    const mobileListItems = document.querySelectorAll(".mobile-nav ul li");
    const footer = document.querySelector(".footer");
    const buttonContact = document.querySelectorAll("button.contact-me");
    console.log(buttonContact, footer);

    buttonContact.forEach((button) =>
      button.addEventListener("click", scrollFooterToView)
    );
    function scrollFooterToView() {
      footer.scrollIntoView({
        behavior: "smooth",
      });
    }

    listItems.forEach((item) =>
      item.addEventListener("click", changeLinkActive)
    );
    function changeLinkActive(e) {
      listItems.forEach((item) => item.classList.remove("active"));
      mobileListItems.forEach((item) => item.classList.remove("active"));
      for (let i = 0; i < mobileListItems.length; i++) {
        if (e.target.innerText === mobileListItems[i].innerText) {
          mobileListItems[i].classList.add("active");
        }
      }
      this.classList.add("active");
    }

    mobileListItems.forEach((item) =>
      item.addEventListener("click", closeMenu)
    );
    function closeMenu(e) {
      setMenu(false);
      listItems.forEach((item) => item.classList.remove("active"));
      mobileNav.classList.add("hidden");
      for (let i = 0; i < listItems.length; i++) {
        if (e.target.innerText === listItems[i].innerText) {
          listItems[i].classList.add("active");
        }
      }
    }

    const mobileNav = document.querySelector(".mobile-nav");
    !menu
      ? mobileNav.classList.add("hidden")
      : mobileNav.classList.remove("hidden");
  }, [menu]);
  return (
    <div className="navbar flex justify-between items-center w-full h-20">
      <div className="font-bold text-2xl">PHOENIX.</div>
      <nav className="navbar-content flex gap-5">
        <ul className="hidden justify-between items-center gap-5 sm:flex">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About me</Link>
          </li>
          <button className="contact-me px-4 py-2 rounded-md text-sm font-semibold text-white">
            Contact me
          </button>
        </ul>
        <div
          className="flex items-center z-50 sm:hidden"
          onClick={() => setMenu(!menu)}
        >
          {!menu ? <MenuRoundedIcon /> : <CloseRoundedIcon />}
        </div>
      </nav>
      <div className="mobile-nav fixed border-b border-inherit md:hidden top-0 right-0 left-0 bg-white z-40 p-10">
        <ul className="flex flex-col items-center justify-center text-xl">
          <li>
            <button className="contact-me px-4 py-2 rounded-md text-sm font-semibold text-white">
              Contact me
            </button>
          </li>
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
      </div>
    </div>
  );
}

export default Navbar;
