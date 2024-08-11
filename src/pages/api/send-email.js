// src/pages/api/send-email.js
import nodemailer from 'nodemailer';

console.log(process.env.AUTH_USER);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

const handler = async (req, res) => {
  const { name, email, phone, message } = req.body;
  const subject = `Contact Form Submission from ${name}`;

  const mailOptions = {
    from: process.env.AUTH_USER,
    to: process.env.AUTH_USER,
    subject,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  const autoResponseOptions = {
    from: process.env.AUTH_USER,
    to: email,
    subject: 'Thank you for contacting us!',
    text: `Dear ${name},\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nBest regards,\nThe Team - ECO-DAQS`,
  };

  try {
    // Send email to the website owner
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent to owner:', info.response);

    // Send auto-response email to the user
    const autoResponseInfo = await transporter.sendMail(autoResponseOptions);
    console.log('Auto-response email sent:', autoResponseInfo.response);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email' });
  }
};

export default handler;
