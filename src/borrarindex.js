//borrar
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var seedDB = require("./seeds");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var User = require("./models/user");
var methodOverride = require("method-override");
var flash = require("connect-flash");
//importar rutas
var commentsRoutes = require("./routes/comments");
var campgroundsRoutes = require("./routes/campgrounds");
var indexRoutes = require("./routes/index");


//mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser: true });
var url = process.env.DATABASEURL ||"mongodb://localhost:27017/yelp_camp";
mongoose.connect(url, { useNewUrlParser: true});
//mongoose.createConnection("uri", { useNewUrlParser: true });
//mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
//mongoose.set('useFindAndModify', false);
//mongoose.set('useCreateIndex', true);

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
//dirname es la direccion del archivo actual
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));



//PASSPORT CONFIG
app.use(require("express-session")({
	//este secreto se usara para codificar y decodif las sesiones
	secret: "I love Beckett",
	resave: false,
	saveUninitialized: false
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
//metodos que se encargan de leer y tomar la info de la sesion que esta codificada
//metodo para codificarla
passport.serializeUser(User.serializeUser());
//metodo para decodificarla
passport.deserializeUser(User.deserializeUser());
//user serรก el objeto con el que podamos usar estos metodos
//se definiรณ con UserSchema.plugin(passportLocalMongoose); en user.js


//seedDB();
 
module.exports = seedDB;
//Campground.create({name: "Granite Hill", image: "https://images.unsplash.com/photo-1573146043078-9fe64b4caae9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80", description: "This is Granite Hill, beautiful trees and Sentos, come visit us!."}, function(err, campground){
	//if(err){
		//console.log(err);
	//}else{
		//console.log("Newly created campground");
		//console.log(campground)
	//}
//})

//configurar current user como variable en todas las paginas
//vamos a usar esta funcion como middlewear en todas las rutas
app.use(function(req, res, next){
	//configuracion de variable
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});
//usar rutas
app.use("/", indexRoutes);
//para reducir rutas de un archivo hacemos
//app.use("/campground", campgroundsRoutes);
//y quitamos /campgrounds de todas las rutas del archivo
app.use("/campgrounds", campgroundsRoutes);
app.use("/campgrounds/:id/comments",commentsRoutes);

app.listen(process.env.PORT, process.env.IP);
//listener for goorm ide
//app.listen(3000, function() { 
    //console.log("Server Listening...");
//});