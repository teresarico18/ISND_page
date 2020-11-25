const mongoose = require("mongoose");

const NoticiaSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  mes: Date,
  extracto: String,
  mensaje: String,
  imagen: String,
});

module.exports = mongoose.model("Noticia", NoticiaSchema);
