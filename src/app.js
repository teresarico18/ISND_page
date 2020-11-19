// load the things we need
const express = require("express");
const routes = require("./routes.js");
const app = express();

const PORT = process.env.PORT || 8080;
// set the view engine to ejs
app.set("view engine", "ejs");
app.use(express.static(__dirname + "../../public"));
app.use(routes);

app.listen(PORT, function () {
  console.log(`Server Listening on port ${PORT}`);
});
