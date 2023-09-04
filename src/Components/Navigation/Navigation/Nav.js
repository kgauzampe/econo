import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
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
            <Link to="/" spy={true} smooth={true} duration={500} className='link'>
              Home
            </Link>
          </li>
          <li>
            <ScrollLink to="abtBanner" spy={true} smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <li className="dropdown">
            <span>Services</span>
            <div className="dropdown-content">
              <Link to="/service1" spy={true} smooth={true} duration={500}>
                Software QA Training
              </Link>
              <Link to="/service2" spy={true} smooth={true} duration={500}>
                IT Training
              </Link>
              <Link to="/service3" spy={true} smooth={true} duration={500}>
                IT Consultancy
              </Link>
              <Link to="/service4" spy={true} smooth={true} duration={500}>
                Software QA Consultancy
              </Link>
            </div>
          </li>
          <li>
            <Link to="/Contact" spy={true} smooth={true} duration={500} className='link'>
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
