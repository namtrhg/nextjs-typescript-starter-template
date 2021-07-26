const nodemailer = require("nodemailer");
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.BOT_EMAIL,
      pass: process.env.BOT_EMAIL_PASSWORD,
    },
  });

  transporter
    .sendMail({
      from: process.env.BOT_EMAIL,
      to: process.env.CONTACT_EMAIL,
      subject: `New mail from ${req.body.email}`,
      text: `${req.body.name} wrote: ${req.body.message}`,
      html: `<b>Customer name: ${req.body.name}</b><br/><b>Message:</b><br/>${req.body.message}`,
    })
    .then((response) => {
      res.send(response);
    })
    .catch((error) => res.send(error));
}
