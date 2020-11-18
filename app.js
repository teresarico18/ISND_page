// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
// use res.render to load up an ejs view file
app.use(express.static(__dirname + '/public'));
// index page

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/oferta', function(req, res) {
    res.render('oferta');
});

app.get('/noticias', function(req, res) {
    res.render('noticias');
});

app.get('/articulo', function(req, res) {
    res.render('articulo');
});

app.get('/faqs', function(req, res) {
    res.render('faqs');
});


app.get('/contacto', function(req, res) {
    res.render('contacto');
});

app.get('/otro', function(req, res) {
    res.render('otro');
});

app.listen(3030, function() { 
    console.log("Server Listening...");
});

