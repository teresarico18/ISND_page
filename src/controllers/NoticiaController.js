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
    const {
      titulo,
      autor,
      fecha,
      extracto,
      texto,
      imagen,
      password,
    } = req.body; // We destructure the object
    // We create a new noticia and save it into MongoDB
    if (password != process.env.ADMIN_PASSWORD) {
      return res.json({ state: "Incorrect Password" });
    }
    const noticia = await Noticia.create({
      titulo,
      autor,
      fecha,
      extracto,
      texto,
      imagen,
      password,
    });
    return res.json({ noticia });
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
  async sendLatestNoticias() {
    const noticias = await Noticia.find(); // We get all the news
    // Return an sliced array of 5 news if we could get them from mongoDB
    return noticias ? noticias.slice(noticias.length - 5, noticias.length) : [];
  },
  async updateNoticia(req, res) {},
};
