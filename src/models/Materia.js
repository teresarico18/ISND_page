const mongoose = require("mongoose");

const MateriaSchema = mongoose.model({
  nombre: String,
  imagen: String,
  descripcion: String,
  bloque: String,
});

module.exports = mongoose.Model("Materia", MateriaSchema);
