const Egresado = require("../models/Egresado.js");

/**const EgresadosSchema = new mongoose.Schema({
  nombre: String,
  imagen: String,
  puesto: String,
}); */

module.exports = {
  async getEgresados() {
    const egresados = await Egresado.find({});
    return egresados ? egresados : [];
  },
};
