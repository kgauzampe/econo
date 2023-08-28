// import React, { useState, useEffect, useRef } from "react";
// import { Link } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll';
// import "./Nav.css";
// import logo from "../../../Images/logox.png"

// const Navbar = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     console.log("pressed")
//     let menu = document.getElementsByClassName("nav-items")
//     console.log("here", menu)
//     setIsNavOpen(!isNavOpen);

//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-brand">
//         <img src={logo} alt="Logo" className="logo" />
//       </div>
//       <div className="nav-items">
//         <div className="links">
//           <Link to="/">Home</Link>
//           <ScrollLink to="abtBanner" smooth={true} duration={500}>
//             About
//           </ScrollLink>
//           <div className="dropdown">
//             <span className="dropdown-toggle">Services</span>
//             <div className="dropdown-content">
//               <Link to="/service1">Software QA Training</Link>
//               <Link to="/service2">IT Training</Link>
//               <Link to="/service3">IT consultancy</Link>
//               <Link to="/service4">Software QA consultancy</Link>
//             </div>
//           </div>
//           <Link to="/Contact">Contact</Link>
//         </div>
//       </div>
//       <div className="nav-toggle" onClick={toggleNav}>
//         <div className={`burger ${isNavOpen ? "toggle" : ""}`} />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from "../../../Images/logox.png"
import './Nav.css';

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <div>
      <AppBar
        className="navbar"
        position="static"
        style={{ backgroundColor: '#FFFFFF' }}>
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <div className="nav-brand">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="links">
            <Link to="/">Home</Link>
            <ScrollLink to="abtBanner" smooth={true} duration={500}>
              About
            </ScrollLink>
            <div className="dropdown">
              <span className="dropdown-toggle">Services</span>
              <div className="dropdown-content">
                <Link to="/service1">Software QA Training</Link>
                <Link to="/service2">IT Training</Link>
                <Link to="/service3">IT consultancy</Link>
                <Link to="/service4">Software QA consultancy</Link>             </div>
            </div>
            <Link to="/Contact">Contact</Link>
          </div>
          {/* Additional Navbar Items for Larger Screens */}
        </Toolbar>
      </AppBar>
      {isMobile ? (
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          {/* Drawer Content */}
        </Drawer>
      ) : (
        <div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
