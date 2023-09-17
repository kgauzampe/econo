import React, { useState } from "react";
import "./Service1.css";
import Navbar from "../Navigation/Navigation/Nav";
import Footer from "../Footer/footer";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Container from '@mui/material/Container';
import Serv1 from '../../Images/QA Training.png'
import secondIMG from '../../Images/QA Training pic 2.png'

const Service1 = () => {

    return (
        <div className="Service1">
            <Navbar />
            <Container>
                <div className="Service1-content">
                    <Typography variant="h3" component="h3" className="Serv1-typo">
                        Help Your TeamMaster Software Quality through Expert-Led QA Training
                    </Typography>
                    <br />
                    <br />
                    <img src={Serv1} alt="Card" className="serv-image1" />
                    <br />
                    <br />
                    <br />
                    <div className="serv1-article">
                        <Typography>
                            Unlock the potential of your software quality assurance with EconoTeque's comprehensive Software QA Training program.
                            Designed to equip businesses with top-tier QA skills, our training options cater to diverse needs, including both onsite
                            and online formats.
                            <br />
                            <br />
                            By investing in Software QA training, you empower your technical workforce to ensure impeccable software quality, 
                            setting the stage for enhanced operational excellence, innovative product development, heightened competitiveness,
                            and a robust foundation for sustained growth.
                        </Typography>

                        <div className="Serv1-text">
                            <Typography variant="h5" component="h5" className="Serv1-t">
                                Get Your Team Equipped With World-Class QA Training
                            </Typography>
                            <Typography className="training1">
                                Determining the need for Software QA training within your team is crucial for maintaining an edge in quality assurance.
                                Here's how to assess whether your team is ready for Software QA training:
                            </Typography>
                            <Typography variant="body1" className="body1">
                                <span style={{ fontWeight: 'bold' }}>Quality Quandaries:</span>If your team encounters challenges in identifying
                                software bugs and issues, it's a clear signal that Software QA training can equip them with the tools to enhance
                                the quality control process. Training provides the skills needed to rigorously analyze and improve software quality,
                                transforming confusion into precision.
                            </Typography>
                            <Typography variant="body1" className="body1">
                                <span style={{ fontWeight: 'bold' }}>Efficiency Hurdles:</span>Struggling to conduct efficient testing and quality
                                assessment? Software QA training steps in to optimize workflows. Your team will learn how to perform comprehensive
                                testing more efficiently and accurately, reducing testing time and enhancing overall efficiency
                            </Typography>
                            <Typography variant="body1" className="body1">
                                <span style={{ fontWeight: 'bold' }}>Frustration with Flaws:</span> Frustration due to recurring software defects
                                indicates a need for Software QA training. This training addresses your team's concerns and empowers them with
                                effective techniques, turning frustration into mastery of error detection and prevention.
                            </Typography>
                            <Typography variant="body1" className="body1">
                                <span style={{ fontWeight: 'bold' }}>Rise in Software Glitches:</span>  An increase in software glitches and
                                functional errors can stem from a gap in understanding how to conduct thorough quality assurance. Software QA
                                training bridges this gap by providing the necessary expertise, leading to a reduction in defects and smoother
                                software operations.
                            </Typography>
                            <Typography variant="body1" className="body1">
                                <span style={{ fontWeight: 'bold' }}>Adoption of New Testing Techniques:</span>  Hesitant to embrace new testing
                                methodologies or tools? Software QA training can alleviate those concerns. This training introduces innovative
                                testing approaches, making the adoption of advanced testing techniques an exciting avenue for growth and improvement.
                                <br />
                                <br />
                                Beyond teaching, we empower your teams to elevate their problem-solving abilities and cultivate a comprehensive
                                understanding of the software they test from its foundational core.
                            </Typography>
                            <img src={secondIMG} alt="Card" className="serv-image1" />
                            <Typography variant="h5" component="h5" className="Serv1-t">
                                Why Choose EconoTeque's Software QA Training?
                            </Typography>
                            <Typography component="div" >
                                EconoTeque stands as a beacon of expert-led Software QA training. Our CEO and lead consultant, Dr Overton, personally guides training initiatives, ensuring your teams learn from a true industry expert.
                                <br />
                                <br />
                                Dr Overton's credentials include:
                                <br />
                                <br />
                                • Holding a PhD in Computer Science
                                <br />
                                • Serving as the Lead Integration Engineer – Deputy Chief Engineer at the US Airforce, achieving savings of $6.2 million
                                <br />
                                • Chairing the Computer Information Systems Bachelors Program @ the Remington College (Memphis, Tennessee, USA)
                                <br />
                                • Authoring over 3 distinguished computer science textbooks
                                <br />
                                Empower your team with EconoTeque's Software QA Training – your gateway to mastering the art of software quality assurance and propelling your business to new heights of excellence.
                            </Typography>
                        </div>
                        <div className=" servBtn">
                            <Button
                                variant="contained"
                                size="medium"
                                className="serv1Btn"
                                href="https://calendly.com/droverton/econoteque-consultation"
                                target="_blank"
                            >
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

export default Service1;