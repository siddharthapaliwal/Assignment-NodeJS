// Import nodemailer
const nodemailer = require('nodemailer');

// Create a transporter object using Gmail's SMTP service
const transporter = nodemailer.createTransport({
  service: 'gmail', // Gmail service
  auth: {
    user: 'sid.paliwal1989@gmail.com',  // Replace with your Gmail address
    pass: '21579@123'    // Replace with your Gmail password or an App password
  }
});

// Define email options
const mailOptions = {
  from: 'sid.paliwal1989@gmail.com',   // Sender's email address
  to: 'mail.rohit1986@gmail.com',    // Receiver's email address
  subject: 'Test Email from Node.js',  // Subject line
  text: 'This is a test email sent using Nodemailer in Node.js.'  // Plain text body
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
