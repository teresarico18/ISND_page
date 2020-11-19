const mongoose = require("mongoose");

const EventoSchema = new mongoose.Schema({
  titulo: String,
  fecha: {
    dia: Number,
    mes: String,
    año: Number,
  },
  extracto: String,
  image: String,
});

module.exports = mongoose.model("Evento", EventoSchema);
