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
                <Typography>Name</Typography>
                <TextField label="Username" variant="outlined" />
                <Typography>Surname</Typography>
                <TextField label="Username" variant="outlined" />
                <Typography>Email Address</Typography>
                <TextField label="Username" variant="outlined" />
                <Typography>Contact Number</Typography>
                <TextField label="Username" variant="outlined" />
                <Typography>Country</Typography>
                <TextField label="Username" variant="outlined" />
                <Typography>City/Town</Typography>
                <TextField label="Username" variant="outlined" />
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
                        <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                        <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
                        <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
                    </RadioGroup>
                </FormControl>
                </div>
                <Typography>Message</Typography>
                <TextField label="Username" variant="outlined" />
            </div>
            <Footer />
        </div>
    )

}
export default Contact;