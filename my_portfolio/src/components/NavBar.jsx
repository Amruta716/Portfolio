import React from "react";
import "./navbar.css";
import logo from "../Asserts/logo4.png"; // adjust path if needed
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-wrapper">
      {/* LOGO */}
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* MENU */}
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li>
          <Link to="/contact" className="contact-btn">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
