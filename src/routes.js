const express = require("express");

const routes = express.Router();

routes.use(express.static(__dirname + "/public"));
// index page
routes.get("/", (req, res) => {
  // use res.render to load up an ejs view file
  res.render("index");
});
/**     USING ROUTING PARAMETERS */
/* Instead of using:
    req.params("/events",(req,res)=>{...})
    req.params("/news",(req,res)=>{...})

  We use routing parameters:
    routes.get("/:route", (req, res) => {
        //We get the value of route and render that ejs file
    const route = req.params.route;
    console.log(route);
    res.render(`${route}`);
});
 
 */
routes.get("/:route", (req, res) => {
  const route = req.params.route;
  console.log(route);
  res.render(`${route}`);
});

module.exports = routes;
