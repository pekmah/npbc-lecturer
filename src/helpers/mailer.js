import nodemailer from "nodemailer";

export const sendMail = async (data = {}) => {
  const { name, email, subject, message } = data;
  const transporter = nodemailer.createTransport({
    pool: true,
    host: "mail.glitexsolutions.co.ke",
    name: "mail.glitexsolutions.co.ke",
    port: 465,
    secure: true, // use TLS
    auth: {
      user: "info@glitexsolutions.co.ke",
      pass: "benson123@",
    },
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  let res;

  try {
    res = await transporter.sendMail({
      from: "info@glitexsolutions.co.ke",
      to: "business@glitexsolutions.co.ke",
      subject: "Glitex Site Enquiry (Contact Form)",
      //text: "Plaintext version of the message",
      html: `<div><h4>Message From: ${name}, Subject: ${subject}, Email: ${email}</h4><p>${message}</p></div>`,
    });
  } catch (e) {
    console.log("SEND MAIL ERROR: ", e);
  }
  return res;
};
