// load the things we need
const express = require("express");
const routes = require("./routes.js");
const app = express();

/*EXAMPLE using module.exports*/
const x = require("./exampleES6");
console.log(x);

// set the view engine to ejs
app.set("view engine", "ejs");
// use res.render to load up an ejs view file
app.use(routes);

app.listen(3030, function () {
  console.log("Server Listening...");
});
