import React, { useState } from "react";
import "./home.css";
import back from "../../Images/cubicbackground.jpg"
import Navbar from "../Navigation/Navigation/Nav";
import Footer from "../Footer/footer";
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
import BannerImg from '../../Images/Banner1.png'
import BannerImg2 from '../../Images/Banner2.png'
import Banner from "../About-Banner/Banner";
import Service1 from "../Service1/Service1";
import Serv1Card from "../Serv1Card/Serv1Card";
import Serv2Card from "../Serv2Card/Serv2Card";
import Serv3Card from "../Serv3Card/Serv3Card";
import Serv4Card from "../Serv4Card/Serv4Card";
import Carousel1 from "../Card-Carousel/Carousel";
import { Link } from 'react-router-dom';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);
const Home = () => {

    return (
        <div className="home">
            <Navbar />
            <div className="home-container">
                <Container>
                    <div className="homeText">
                        <Typography variant="h3" component="h3" className="hometag">
                            YOUR IT CONSULTING AND TRAINING PARTNER
                        </Typography>
                        <Typography variant="h5" component="h5" className="hometag2">
                            Providing Businesses Solutions to Optimise and Grow Their Technology
                        </Typography>
                    </div>
                    <Link to="/Contact" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" size="medium" className="homeBtn">
                            Contact Us
                        </Button>
                    </Link>
                </Container>
            </div>
            <div className="weUnder">
                <img src={BannerImg} alt="Card" className="banner-image" />

            </div>
            <div className="About-container">
                <Container>
                    <Typography variant="h3" component="h3" >
                        Our Services
                    </Typography>
                    <br/>
                    <Typography variant="h5" component="h5">
                        Tailor-made Services Built for Your Busienss Success
                    </Typography>
                    <br/>
                    <div className="about-cards">
                        <div className="card1">
                            <Serv1Card />
                        </div>
                        <div className="card2">
                            <Serv2Card />
                        </div>
                        <div className="card3">
                            <Serv3Card />
                        </div>
                        <div className="card4">
                            <Serv4Card />
                        </div>
                    </div>
                </Container>
                <div className="abtBanner">
                    <Banner />
                </div>
                <div className="Carousel-div">
                    <Typography variant="h3" component="h3" >
                        Testimonials
                    </Typography>
                    <div className="cara">
                        <Carousel1 />
                    </div>
                </div>
                <div className="getB">
                     <img src={BannerImg2} alt="Card" className="banner-image2" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
