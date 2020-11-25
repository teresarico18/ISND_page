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
  async experimentcreateNotica(req, res) {
    console.log(req);
    console.log(req.body); // Now we will see the form data!!
    const { titulo, autor, mes, extracto, mensaje, imagen } = req.body; // We destructure the object
    // We create a new noticia and save it into MongoDB
    const noticia = await Noticia.create({
      titulo,
      autor,
      mes,
      extracto,
      mensaje,
      imagen,
    });
    return res.json({ noticia }); // As an experiment we are going to test if we could save the data in Mongo
  },
  async fetchNoticias(req, res) {
    Noticia.find({}, (err, allNoticias) => {
      if (err) {
        console.log(err);
      } else {
        res.render("noticias/index", { noticias: allNoticias });
      }
    });
    const noticias = await Noticia.find({});
  },
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
