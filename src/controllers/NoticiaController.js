const Noticia = require("../models/Noticia.js");

/*const NoticiaSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  fecha: {
    dia: Number,
    mes: String,
    año: Number,
  },
  extracto: String,
  texto: String,
  imagen: String,
});
  */

module.exports = {
  async createEvent(req, res) {
    const { titulo, autor, fecha, extracto, texto, imagen } = req.body;

    //02-02-2020
    //TODO : FORMAT DATE
    const evento = await Evento.create({
      titulo,
      autor,
      fecha,
      extracto,
      texto,
      imagen,
    });

    return res.render("index");
  },
  async updateEvento(req, res) {},
};