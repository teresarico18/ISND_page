const mongoose = require("mongoose");

const EventoSchema = new mongoose.Schema({
  titulo: String,
  fecha: Date,
  extracto: String,
  imagen: String,
});

module.exports = mongoose.model("Evento", EventoSchema);
