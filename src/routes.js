const express = require("express");

const routes = express.Router();

routes.use(express.static(__dirname + "/public"));
// index page

routes.get("/", function (req, res) {
  res.render("index");
});
routes.get("/oferta", function (req, res) {
  res.render("oferta");
});

routes.get("/noticias", function (req, res) {
  res.render("noticias");
});

routes.get("/articulo", function (req, res) {
  res.render("articulo");
});

routes.get("/faqs", function (req, res) {
  res.render("faqs");
});

routes.get("/contacto", function (req, res) {
  res.render("contacto");
});

routes.get("/otro", function (req, res) {
  res.render("otro");
});
routes.get("/otra", function (req, res) {
  res.render("otra");
});

module.exports = routes;
