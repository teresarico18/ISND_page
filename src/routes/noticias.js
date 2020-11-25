const express = require("express");
const router = express.Router();
const noticiaController = require("./controllers/NoticiaController")

//Mostrar todas las noticias
router.get("/", (req, res) =>{
    Noticia.find({}, (err, allNoticias)=>{
		if(err){
			console.log(err)
		}else{
			res.render("noticias/index", {noticias: allNoticias});
		}
	});
});
//Crear nueva noticia
router.post("/", noticiaController.createNoticia)

//Mostrar show para crear nueva noticia
router.get("/new", (req, res) =>{
    res.render("noticias/new");
});

router.get("/:noticia", (req, res) => {
    const Noticia = req.params.noticia;
    Noticia.findById(req.params.id).exec(function(err, foundNoticia){
		if(err){
			console.log(err);
		}else{
			res.render("noticias/show", {noticia: foundNoticia});
		}
	})
});


module.exports = router;