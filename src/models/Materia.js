const mongoose = require("mongoose");

const MateriaSchema = new mongoose.Schema({
  nombre: String,
  imagen: String,
  descripcion: String,
  bloque: String,
});

module.exports = mongoose.model("Materia", MateriaSchema);
