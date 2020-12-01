const express = require("express");
const router = express.Router();
const NoticiaController = require("../controllers/NoticiaController");
const nodemailer = require("nodemailer");
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;

router.get("/", NoticiaController.indexLatestNoticias);

router.get("/faqs", (req, res) => {
  res.render("faqs");
});

router.get("/contacto", (req, res) => {
  res.render("contacto", { error: false });
});

// POST del form contacto
router.post("/contacto", (req, res) => {
  // MTP server
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
});

router.get("/nosotros", NoticiaController.nosotrosLatestNoticias);

router.get("/proyectos", (req, res) => {
  res.render("proyectos");
});

module.exports = router;
