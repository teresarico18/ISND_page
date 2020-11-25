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
  async createNoticia(req, res) {
    const { titulo, autor, fecha, extracto, texto, imagen } = req.body;

    //02-02-2020
    //TODO : FORMAT DATE
    const noticia = await Noticia.create({
      titulo,
      autor,
      fecha,
      extracto,
      texto,
      imagen,
    });

    return res.render("index");
  },
  async updateNoticia(req, res) {},
};