import React from 'react';
import { Typography } from "@mui/material";
import AboutImg from '../../Images/Dr Overton.png'
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Carousel from '../Card-Carousel/Carousel';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h2>About Us</h2>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={6}>
            <Typography>
              EconoTeque specialises in delivering rare Information Technology expertise and training
              to businesses and individuals across Africa and beyond. Founded and spearheaded by Dr.
              James Overton, a distinguished IT visionary with extensive hands-on experience in major
              organisations like IBM and the US Air Force.
            </Typography>
            <br />
            <Typography>
              Dr. Overton isn't just a leader; he's an IT trailblazer holding a PhD in Computer Science.
              His remarkable achievements include a remarkable $6.2 million cost-saving feat for the US
              Air Force as Lead Integration Engineer. He also led the Computer Information Systems
              Bachelors Program at Remington College, USA, and authored three comprehensive computer
              science textbooks to simplify the subject for students.
            </Typography>
            <br />
            <Typography>
              At EconoTeque, we prioritise practical learning. Our training programs, workshops,
              and consultancy services are meticulously crafted to empower you and your business
              in the digital era. Whether you're a business aiming to elevate your IT capabilities
              or an individual navigating the tech landscape, EconoTeque is here to guide you.
            </Typography>
            <br />
            <Typography>
              Come join us, and together, let's unleash the full potential of IT in your business.
            </Typography>
            <Button variant="contained" size="medium" className="bannerBtn">
              Contact Us
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img src={AboutImg} alt="Card" className="aboutimg" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Banner;
