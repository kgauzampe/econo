import React from "react";
import Navbar from "../Navigation/Navigation/Nav";
import Footer from "../Footer/footer";
import { Typography } from "@mui/material";

const Contact = () => {

    return(
        <div className="contact">
            <Navbar/>
            <div className="contact-con">
            <Typography>Talk To Us</Typography>
            </div>
            <Footer/>
        </div>
    )

}
export default Contact;