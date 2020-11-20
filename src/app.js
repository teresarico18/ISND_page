// load the things we need
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const indexRoutes = require("./routes/index.js");
const noticiasRoutes = require("./routes/noticias.js")
const app = express();
const PORT = process.env.PORT || 8080;
// set the view engine to ejs

try {
  mongoose.connect(
    `mongodb+srv://dbISND:${process.env.DB_PASSWORD}@clusterisnd.hck7n.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  mongoose.set("useCreateIndex", true);
  console.log("CONNECTION!");
} catch (error) {
  console.log(error);
}

app.set("view engine", "ejs");
app.use(express.static(__dirname + "../../public"));
app.use("/",indexRoutes);
app.use("/noticias", noticiasRoutes);
app.listen(PORT, function () {
  console.log(`Server Listening on port ${PORT}`);
});
