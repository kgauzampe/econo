const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001; // or any other port you prefer

const transporter = nodemailer.createTransport({
  service: 'Gmail', // e.g., Gmail, Outlook, etc.
  auth: {
    user: 'kgauza.mpe@gmail.com',
    pass: 'kgauzin.mpe',
  },
});

app.use(express.json());

app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;
  
  const mailOptions = {
    from: 'kgauza.mpe@gmail.com',
    to,
    subject,
    text,
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
