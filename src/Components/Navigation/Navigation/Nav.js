import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../../Images/logox.png'
import './Nav.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
      <img src={logo} alt="logo" className="logo" />
      </div>
      <div className={`menu ${isOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="home" spy={true} smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="dropdown">
            <span>Services</span>
            <div className="dropdown-content">
              <Link to="service1" spy={true} smooth={true} duration={500}>
                Service 1
              </Link>
              <Link to="service2" spy={true} smooth={true} duration={500}>
                Service 2
              </Link>
            </div>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'active' : ''}`} />
        <div className={`bar ${isOpen ? 'active' : ''}`} />
        <div className={`bar ${isOpen ? 'active' : ''}`} />
      </div>
    </nav>
  );
};

export default Navbar;
