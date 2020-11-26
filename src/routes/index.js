const express = require("express");
const router = express.Router();
const NoticiaController = require("../controllers/NoticiaController");

router.get("/", NoticiaController.latestNoticias);

router.get("/faqs", (req, res) => {
  res.render("faqs");
});

router.get("/contacto", (req, res) => {
  res.render("contacto");
});

router.get("/nosotros", (req, res) => {
  res.render("nosotros");
});

module.exports = router;
