const Materias = require("../models/Materia");
const splitMateriasByBloque = require("../utils/convertArrayToObjectByKey");
module.exports = {
  async getMaterias() {
    const fetchMaterias = await Materias.find({});
    const materias = splitMateriasByBloque(fetchMaterias, "bloque");
    return materias;
  },
};
