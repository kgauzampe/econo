const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'kgauza.mpe@gmail.com',
        pass: 'kgauzin.mpe'
    }
});

// Export a function to send an email
exports.sendEmail = (mailOptions) => {
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error);
            } else {
                resolve(info);
            }
        });
    });
};
