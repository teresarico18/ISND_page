const mongoose = require("mongoose");

const EventoSchema = new mongoose.Schema({
  titulo: String,
  fecha: {
    dia: Number,
    mes: String,
    año: Number,
  },
  extracto: String,
  imagen: String,
});

module.exports = mongoose.model("Evento", EventoSchema);
