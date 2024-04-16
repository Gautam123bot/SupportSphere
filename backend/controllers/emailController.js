import express from "express"
import nodemailer from "nodemailer"

const sentEmails = [];

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'kelvin.koch46@ethereal.email',
        pass: 'hGbFzPqAkDBMktPmef'
    }
});

// Endpoint to handle email sending
async function sendEmail(req, res) {
  const { email } = req.body;

  // Create email options
  const mailOptions = {
    from: '"Gautam kumar 👻" <0101gautamkumar@gmail.com>',
    to: email,
    subject: 'Hello from the server!',
    text: 'This is a test email from the server.',
  };

  // Send email
  try {
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);

    sentEmails.push({ email, messageId: info.messageId });
    res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email' });
    }
  
};

function getSentEmails(req, res) {
    try {
        res.status(200).json({
            count: sentEmails.length,
            data: sentEmails,
        });
    } catch (error) {
        console.error('Error fetching sent emails:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch sent emails' });
    }
}

export {sendEmail, getSentEmails };