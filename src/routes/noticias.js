const express = require("express");
const router = express.Router();
const noticiaController = require("../controllers/NoticiaController");

//Mostrar todas las noticias
router.get("/", noticiaController.fetchNoticias);
//Crear nueva noticia
router.post("/", noticiaController.createNoticia);

//Mostrar show para crear nueva noticia
router.get("/new", (req, res) => {
  res.render("noticias/new");
});
// POST METHOD USER POSTS A NEW "NOTICA"
router.post("/new", noticiaController.experimentcreateNoticia);

router.get("/:noticia", noticiaController.showNoticiaById);

module.exports = router;
