// Navbar.js

import React, { useState } from "react";
import "./home.css";
import back from "../../Images/cubicbackground.jpg"
import Navbar from "../Navigation/Navigation/Nav";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Card1 from "../Card1/card1";
import Card2 from "../Card2/card2";
import Card3 from "../Card3/card3";
import Card4 from "../Card4/card4";
import Card5 from "../Card5/card5";

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
const Home = () => {
    const backgroundStyle = {
        backgroundImage: 'url("../../Images/cubicbackground.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Adjust the height as needed
      };
    

return (
<div className="home">
    <Navbar/>
    <div className="home-container">
    <Container>
        <div className="homeText">
            <Typography variant="h3" component="h3" className="hometag">
                YOUR IT CONSULTING AND TRAINING PARTNER
            </Typography>;
            <Typography variant="h5" component="h5" className="hometag">
                Providing Businesses Solutions to Optimise and Grow Their Technology
            </Typography>;
        </div>
        <Button variant="contained" size="medium" className="homeBtn">
          Contact Us
        </Button>
        </Container>
    </div>
    <Typography variant="h5" component="h5" >
        We Understand Business Technology 
    </Typography>
    <div className="About-container">
        <Container>
            <div className="about-cards">
                <div className="card1">
                    <Card1
                        title="Card Title"
                        // content="This is the content of the card. You can add more details here."
                        imageUrl="path_to_image.jpg" // Replace with the actual image path
                    />
                </div>
                <div className="card2">
                    <Card2
                        title="Card Title"
                        // content="This is the content of the card. You can add more details here."
                        imageUrl="path_to_image.jpg" // Replace with the actual image path
                    />
                </div>
                <div className="card3">
                    <Card3
                        title="Card Title"
                        // content="This is the content of the card. You can add more details here."
                        imageUrl="path_to_image.jpg" // Replace with the actual image path
                    />
                </div>
                <div className="card4">
                    <Card4
                        title="Card Title"
                        // content="This is the content of the card. You can add more details here."
                        imageUrl="path_to_image.jpg" // Replace with the actual image path
                    />
                </div>
                <div className="card5">
                    <Card5
                        title="Card Title"
                        // content="This is the content of the card. You can add more details here."
                        imageUrl="path_to_image.jpg" // Replace with the actual image path
                    />
                </div>
            </div>
        </Container>
    </div>

</div>
  );
};

export default Home;
