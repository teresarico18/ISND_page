const express = require("express");

const routes = express.Router();

// index page
routes.get("/", (req, res) => {
  // use res.render to load up an ejs view file
  res.render("index");
});

routes.get("/:route", (req, res) => {
  const route = req.params.route;
  console.log(route);
  res.render(`${route}`);
});

module.exports = routes;
