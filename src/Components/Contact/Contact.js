import React, { useState } from "react";
import Navbar from "../Navigation/Navigation/Nav";
import Footer from "../Footer/footer";
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';


const Contact = () => {
    const [selectedValue, setSelectedValue] = useState('option1');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
    return (
        <div className="contact">
            <Navbar />
            <div className="contact-con">
                <Typography   >Name</Typography>
                <TextField label="Name" variant="outlined"  id="filled-basic" size="small"/>
                <Typography  id="filled-basic">Surname</Typography>
                <TextField label="Surname" variant="outlined" size="small"/>
                <Typography  id="filled-basic">Email Address</Typography>
                <TextField label="Email" variant="outlined" size="small"/>
                <Typography  id="filled-basic">Contact Number</Typography>
                <TextField label="Contact Number" variant="outlined" size="small"/>
                <Typography  id="filled-basic">Country</Typography>
                <TextField label="Country" variant="outlined" size="small"/>
                <Typography  id="filled-basic">City/Town</Typography>
                <TextField label="City/Town" variant="outlined" size="small"/>
                <div className="radio">
                <FormControl component="fieldset">
                    <Typography>
                        Reason for contact
                    </Typography>
                    <RadioGroup
                        aria-label="radio-group"
                        name="radio-group"
                        value={selectedValue}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="option1" control={<Radio />} label="IT Consulting" />
                        <FormControlLabel value="option2" control={<Radio />} label="IT Training" />
                        <FormControlLabel value="option3" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
                </div>
                <Typography  id="filled-basic">Message</Typography>
                <TextField  variant="outlined" />
            </div>
            <div className="footer-con">
            <Footer />
            </div>
       
        </div>
    )

}
export default Contact;