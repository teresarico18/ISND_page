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
  async experimentcreateNoticia(req, res) {
    const { titulo, autor, fecha, extracto, texto, imagen } = req.body; // We destructure the object
    // We create a new noticia and save it into MongoDB
    const noticia = await Noticia.create({
      titulo,
      autor,
      fecha,
      extracto,
      texto,
      imagen,
    });
    return res.json({ noticia }); // As an experiment we are going to test if we could save the data in Mongo
  },
  async fetchNoticias(req, res) {
    const noticias = await Noticia.find({});
    if (noticias) {
      res.render("noticias/index", {
        noticias: noticias,
      });
    } else {
      res.render("noticias/index");
    }
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
  async showNoticiaById(req, res) {
    const idNoticia = req.params.noticia;
    const noticia = await Noticia.findById(idNoticia);
    if (noticia) {
      res.render("noticias/show", {
        noticia: noticia,
      });
    } else {
      res.redirect("/");
    }
  },
  async latestNoticias(req, res) {
    const noticias = await Noticia.find(); // We get all the news
    // Return an sliced array of 5 news if we could get them from mongoDB
    const latestNews = noticias
      ? noticias.slice(noticias.length - 5, noticias.length)
      : [];
    res.render("index", { noticias: latestNews });
  },
  async updateNoticia(req, res) {},
};
