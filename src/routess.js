const express = require("express");

const routes = express.Router();
const EventoController = require("./controllers/EventoController");

// index page
routes.get("/", function (req, res) {
  // use res.render to load up an ejs view file
  res.render("index");
});
routes.get("/:route", (req, res) => {
  console.log(req);
  const route = req.params.route;
  console.log(route);
  res.render(`${route}`);
});
routes.get("/noticias", (req, res) => {
  console.log(req);
  //const route = req.params.route;
  //console.log(route);
  res.render("../views/noticias/index");
});
routes.get("/noticias/noticia", (req, res) => {
  console.log(req);
  //const route = req.params.route;
  //console.log(route);
  res.render("../views/noticias/show");
});
routes.get("/noticias/new", (req, res) => {
  console.log(req);
  //const route = req.params.route;
  //console.log(route);
  res.render("../views/noticias/new");
});


/** EVENTOS */
routes.post("/createEvent", EventoController.createEvent);

/** NOTICIAS */

module.exports = routes;
