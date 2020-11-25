const mongoose = require("mongoose");

const NoticiaSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  fecha: Date,
  extracto: String,
  texto: String,
  imagen: String,
});

module.exports = mongoose.model("Noticia", NoticiaSchema);
