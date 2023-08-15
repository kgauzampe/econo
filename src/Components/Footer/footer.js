// Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">    
    <div className="footer-content">
    <div className="footer-links">
      <a href="/">Home</a>
      <a href="/about">About Us</a>
      <a href="/services">Services</a>
      <a href="/contact">Contact</a>
    </div>
    <p className='foot'>&copy; 2023 EconoTeque Powered By Kreyative Kreek X BlvckKing</p>
  </div>
    </footer>
  );
};

export default Footer;
