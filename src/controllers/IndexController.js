const Noticia = require("../models/Noticia");
const nodemailer = require("nodemailer");
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;

module.exports = {
  async sendContactUsEmail(req, res) {
    const smtpTrans = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
    });

    // Correo que se mandará
    const mail = {
      from: "Your sender info here", // This is ignored by Gmail
      to: GMAIL_USER,
      subject: "Nuevo mensaje de contacto de ISND",
      text: `${req.body.nombre} (${req.body.correo}) says: ${req.body.mensaje}`,
    };

    // Enviar correo
    smtpTrans.sendMail(mail, (error, response) => {
      error ? res.render("contacto", { error: true }) : res.redirect("/");
    });
  },
};
