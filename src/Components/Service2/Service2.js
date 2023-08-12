import React, { useState } from "react";
import "./Service2.css";
import Navbar from "../Navigation/Navigation/Nav";
import Footer from "../Footer/footer";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Container from '@mui/material/Container';
import Serv2 from '../../Images/card2.png'


const Service2 = () => {

    return (
        <div className="Service1">
            <Navbar />
            <Container>
                <div className="Service1-content">
                    <Typography variant="h3" component="h3" className="Serv1">
                        IT Training From Work-Class Experts
                    </Typography>
                    <br />
                    <br />
                    <img src={Serv2} alt="Card" className="serv-image2" />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="serv2-article">
                        <Typography>
                            EconoTeque delivers exceptional System Development Training to businesses, offering flexible options including
                            both onsite and online formats. Investing in IT training equips your technical workforce with the expertise needed
                            to harness technology's full potential. This translates to heightened operational efficiency, increased innovation,
                            enhanced competitiveness, and a fortified foundation for sustained growth.
                        </Typography>

                        <div className="Serv1-text">
                            <Typography variant="h5" component="h5" className="Serv1-t">
                                How Do I Know My Team Needs IT Training?
                            </Typography>
                            <Typography className="training1">
                                Identifying the need for IT training within your team involves recognizing certain indicators and assessing your
                                team's performance and goals. Here's a guide to help you determine if your team requires IT training:
                            </Typography>
                            <Typography variant="body1" className="body1">
                                <span style={{ fontWeight: 'bold' }}>Tech Struggles:</span>When your team grapples with software and tools like
                                solving a complex puzzle, it's a clear indicator that IT training can help piece everything together.
                                Training equips them with the skills to navigate and utilize technology confidently, turning confusion
                                into competence.
                            </Typography>
                            <Typography variant="body1" className="body1">
                                <span style={{ fontWeight: 'bold' }}>Task Slowdown:</span> If tasks take longer to complete than they should,
                                it might be due to a lack of efficiency in using technology. IT training steps in to streamline workflows,
                                ensuring your team can accomplish tasks faster and more accurately.fficiency
                            </Typography>
                            <Typography variant="body1" className="body1">
                                <span style={{ fontWeight: 'bold' }}>Frustration Central:</span>  When you hear sighs of frustration and witness
                                tech-related hiccups, it's time to consider IT training. The training addresses your team's challenges and boosts
                                their confidence, transforming tech-related anxiety into a sense of mastery.
                            </Typography>
                            <Typography variant="body1" className="body1">
                                <span style={{ fontWeight: 'bold' }}>Mistake Surge:</span>  An increase in errors and mistakes can stem from a knowledge gap in using
                                technology effectively. IT training bridges this gap by providing the necessary expertise, resulting in fewer errors and smoother
                                operations.
                            </Typography>
                            <Typography variant="body1" className="body1">
                                <span style={{ fontWeight: 'bold' }}>New Tech Worries:</span>  If your team hesitates to embrace new technology or
                                approaches, IT training can alleviate those worries. The training introduces them to innovative tools and methods,
                                making adopting new tech an exciting opportunity for growth and advancement.
                                <br />
                                By recognizing these signs and investing in IT training, you empower your team to navigate the digital landscape easily,
                                turning potential challenges into opportunities for skill enhancement and success.
                            </Typography>
                        </div>
                        <div className=" servBtn">
                            <Button variant="contained" size="medium" className="serv1Btn">
                                schedule a consultation
                            </Button>
                        </div>
                    </div>

                </div>
            </Container>
            <Footer />
        </div>

    )
}

export default Service2;