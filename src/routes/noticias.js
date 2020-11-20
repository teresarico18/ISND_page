const express = require("express");
const router = express.Router();


router.get("/", (req, res) =>{
    res.render("noticias/index");
});

router.get("/new", (req, res) =>{
    res.render("noticias/new");
});

router.get("/:noticia", (req, res) => {
    const noticia = req.params.noticia;
    res.render("noticias/show")
});


module.exports = router;