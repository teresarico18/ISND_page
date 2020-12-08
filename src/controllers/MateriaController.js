const Materias = require("../models/Materia");

module.exports = {
  async getMaterias() {
    const fetchMaterias = await Materias.find({});
    const materias = fetchMaterias.map((materia)=>{
        if (materia.bloque[]) {
            
        }
    })
    const materias = {
        sistemas : [],
        negocios : [],
    }
    //TODO : MUST CHECK THIS
    fetchMaterias.map((materia)=>{
        if (materia.bloque == "Sistemas"){
            materias["sistemas"].append(materia)
        }
    })
    return materias;
  },
};
