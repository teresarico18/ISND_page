const mongoose = require("mongoose");

const NoticiaSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  fecha: {
    dia: Number,
    mes: String,
    año: Number,
  },
  extracto: String,
  texto: String,
  imagen: String,
});

module.exports = mongoose.model("Noticia", NoticiaSchema);
