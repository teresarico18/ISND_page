const express = require("express");
const router = express.Router();
const NoticiaController = require("../controllers/NoticiaController");
const IndexController = require("../controllers/IndexController");
const nodemailer = require("nodemailer");
const Materia = require("../models/Materia");

router.get("/", async (req, res) => {
  const noticias = await NoticiaController.sendLatestNoticias();
  res.render("index", { noticias });
});

router.get("/faqs", (req, res) => {
  res.render("faqs");
});

router.get("/contacto", (req, res) => {
  res.render("contacto", { error: false });
});

// POST del form contacto
router.post("/contacto", IndexController.sendContactUsEmail);

router.get("/nosotros", async (req, res) => {
  const noticias = await NoticiaController.sendLatestNoticias();
  //TODO : MUST CHANGE THE CONTROLLER AND SEND IT
  const materias = await MateriaController.getMaterias();
  res.render("nosotros", { noticias });
});

router.get("/proyectos", (req, res) => {
  res.render("proyectos");
});

module.exports = router;
