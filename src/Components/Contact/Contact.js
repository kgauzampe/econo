import React, { useState } from "react";
import Navbar from "../Navigation/Navigation/Nav";
import Footer from "../Footer/footer";
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useForm } from '@formspree/react';
import './Contact.css';

const Contact = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        setName(event.target.value);
        setSurname(event.target.value);
        setEmail(event.target.value);
        setContact(event.target.value);
        setCountry(event.target.value);
        setCity(event.target.value);
        setMessage(event.target.value);
    };

    const [state, handleSubmit] = useForm('xgejkezo');

    return (
        <div className="contact">
            <Navbar />
            <form className="contact-con" onSubmit={handleSubmit}>
                <Typography>Name</Typography>
                <TextField
                    label="Name"
                    variant="outlined"
                    id="filled-basic"
                    size="small"
                    sx={{
                        width: 500
                    }}
                    InputProps={{ sx: { height: 30 } }}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <Typography id="filled-basic">Surname</Typography>
                <TextField
                    label="Surname"
                    variant="outlined"
                    size="small"
                    sx={{
                        width: 500
                    }}
                    InputProps={{ sx: { height: 30 } }}
                    value={surname}
                    onChange={(event) => setSurname(event.target.value)}
                />
                <Typography id="filled-basic">Email Address</Typography>
                <TextField
                    label="Email"
                    variant="outlined"
                    size="small"
                    sx={{
                        width: 500
                    }}
                    InputProps={{ sx: { height: 30 } }}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <Typography id="filled-basic">Contact Number</Typography>
                <TextField
                    label="Contact Number"
                    variant="outlined"
                    size="small"
                    sx={{
                        width: 500
                    }}
                    InputProps={{ sx: { height: 30 } }}
                    value={contact}
                    onChange={(event) => setContact(event.target.value)}
                />
                <Typography id="filled-basic">Country</Typography>
                <TextField
                    label="Country"
                    variant="outlined"
                    size="small"
                    sx={{
                        width: 500
                    }}
                    InputProps={{ sx: { height: 30 } }}
                    value={country}
                    onChange={(event) => setCountry(event.target.value)}
                />
                <Typography id="filled-basic">City/Town</Typography>
                <TextField
                    label="City/Town"
                    variant="outlined"
                    size="small"
                    sx={{
                        width: 500
                    }}
                    InputProps={{ sx: { height: 30 } }}
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                />
                <div className="radio">
                    <FormControl component="fieldset">
                        <Typography fontWeight="bold">
                            Reason for contact
                        </Typography>
                        <RadioGroup
                            aria-label="radio-group"
                            name="radio-group"
                            value={selectedValue}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="IT Consulting" control={<Radio />} label="IT Consulting" />
                            <FormControlLabel value="IT Training" control={<Radio />} label="IT Training" />
                            <FormControlLabel value="Other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <Typography id="filled-basic">Message</Typography>
                <TextField
                    variant="outlined"
                    sx={{
                        width: 500
                    }}
                    InputProps={{ sx: { height: 190 } }}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                />
                <div className="sendBtn">
                    <Button
                        type="submit"
                        disabled={state.submitting}
                        variant="contained"
                        size="medium"
                        className="homeBtn"
                    >
                        Send
                    </Button>
                </div>
            </form>
            <div className="footer-con">
                <Footer />
            </div>
        </div>
    )
}

export default Contact;
