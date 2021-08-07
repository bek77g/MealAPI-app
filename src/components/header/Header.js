import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="#0a6ab6 blue header__nav">
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo">
            MealSAR
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
