const mongoose = require("mongoose");

const EgresadoSchema = new mongoose.Schema({
  nombre: String,
  imagen: String,
  puesto: String,
});

module.exports = mongoose.model("Egresado", EgresadoSchema);
