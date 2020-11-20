const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>{
    res.render("index");
});

router.get("/faqs", (req, res) =>{
    res.render("faqs");
});

router.get("/contacto", (req, res) =>{
    res.render("contacto");
});

router.get("/oferta", (req, res) =>{
    res.render("oferta");
});

module.exports = router;