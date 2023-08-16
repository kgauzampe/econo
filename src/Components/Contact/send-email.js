import axios from 'axios';

// ...

const sendEmail = async () => {
  try {
    await axios.post('/send-email', {
      to: 'recipient@example.com',
      subject: 'Hello from React App',
      text: 'This is a test email from my React app.',
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email', error);
  }
};
