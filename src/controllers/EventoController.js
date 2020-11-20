const Evento = require("../models/Evento.js");

/*const EventoSchema = new mongoose.Schema({
    titulo: String,
    fecha: {
      dia: Number,
      mes: String,
      año: Number,
    },
    extracto: String,
    image: String,
  });
  */

module.exports = {
  async createEvent(req, res) {
    const { titulo, fecha, extracto, imagen } = req.body;

    //02-02-2020
    //TODO : FORMAT DATE
    const evento = await Evento.create({
      titulo,
      fecha,
      extracto,
      imagen,
    });

    return res.render("index");
  },
  async updateEvento(req, res) {},
};
