// load the things we need
const express = require("express");
const routes = require("./routes.js");
const app = express();

const PORT = process.env.PORT || 8080;
/*EXAMPLE using module.exports*/
const x = require("./exampleES6");
console.log(x);

// set the view engine to ejs
app.set("view engine", "ejs");

app.use(routes);

app.listen(PORT, function () {
  console.log(`Server Listening on port ${PORT}`);
});
