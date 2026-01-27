import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: 'jyantithakor941@gmail.com',
    pass: 'rtfccksierhfvzmk',
  },
});

export default transporter;