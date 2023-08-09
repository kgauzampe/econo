import React from 'react';
import { Typography } from "@mui/material";
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h2>About Us</h2>
        <Typography>
        Welcome to our IT consulting and training company! We empower businesses with comprehensive
         solutions and training programs to thrive in the digital age. Our experienced team offers tailored
          consulting services, including IT strategy, infrastructure design, software development, and cybersecurity.
           Our training courses cover programming, cloud computing, data analytics, and more. Partner with us for exceptional
            results and personalized support. Contact us today to harness the power of technology for your success.
        </Typography>

        <Typography>
        Welcome to our IT consulting and training company! We empower businesses with comprehensive solutions and training
         programs to thrive in the digital age. 
        </Typography>
      </div>
    </div>
  );
};

export default Banner;
