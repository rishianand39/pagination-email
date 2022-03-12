const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: '4f1768f0b85ddb', // generated ethereal user
        pass: 'aeb53e59fbfd8a', // generated ethereal password
    },
});

module.exports = transporter;