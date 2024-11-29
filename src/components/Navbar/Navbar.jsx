import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import "./Navbar.css";
import SocialBox from "../Shared/SocialBox";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      {/* <a className="title" href="/">
        <img className="logo" src="/assets/avatar/syny.png" alt="" />
      </a> */}
      <SocialBox />
      <img
        className="menu-btn"
        src={
          menuOpen ? "/assets/nav/closeIcon.png" : "/assets/nav/menuIcon.png"
        }
        alt="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      />
      <div className="menu">
        <ul
          className={menuOpen ? "menu-items menu-open" : "menu-items"}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">O mně</a>
          </li>
          <li>
            <a href="#experiences">Zkušenosti</a>
          </li>
          <li>
            <a href="#projcets">Projekty</a>
          </li>
          <li>
            <a href="#contact" className="color-special">
              <span className="color-special"></span>Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
