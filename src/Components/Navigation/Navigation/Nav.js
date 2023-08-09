// Navbar.js

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Nav.css";
import logo from "../../../Images/logox.png"

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
      <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Service1">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="nav-toggle" onClick={toggleNav}>
        <div className={`burger ${isNavOpen ? "toggle" : ""}`} />
      </div>
    </nav>
  );
};

export default Navbar;
