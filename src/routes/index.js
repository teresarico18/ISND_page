const express = require("express");
const router = express.Router();
const NoticiaController = require("../controllers/NoticiaController");

router.get("/", NoticiaController.indexLatestNoticias);

router.get("/faqs", (req, res) => {
  res.render("faqs");
});

router.get("/contacto", (req, res) => {
  res.render("contacto");
});

router.get("/nosotros", NoticiaController.nosotrosLatestNoticias);

router.get('*', (req, res) => {
  res.redirect('/');
});

module.exports = router;
