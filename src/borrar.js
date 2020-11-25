//express route
var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

router.get("/", function(req, res){
	res.render("landing");
});


// AUTH ROUTES
//Sign up
router.get("/register", function(req, res){
	res.render("register");
});

router.post("/register", function(req, res){
	var newUser = new User({username: req.body.username});
	//mandar registrar nuevo usuario
	User.register(newUser, req.body.password, function(err, user){
		//si hay error redirigir
		if(err){
			//mandar mensaje con el error
			req.flash("error", err.message);
			//si el user ya esta registrado tmb sale err
			//console.log(err);
			return res.render("register");
		}
		//si no hubo error mandar a los camps
		passport.authenticate("local")(req, res, function(){
			req.flash("success", "Welcome to Yelp Camp" + user.username);
			res.redirect("/campgrounds");
		});
	});
});

//show login form
router.get("/login", function(req, res){
	res.render("login");
});
//el login sucede en el middlewear
//le mandamos las rutas para que use si funciona o no el log in
router.post("/login", passport.authenticate("local", 
 	{
		successRedirect: "/campgrounds",
		failureRedirect: "/login"
	}), function(req, res){
});

//log out routes
router.get("/logout", function(req, res){
	req.logout();
	req.flash("success", "Logged you out. See you later!");
	res.redirect("/campgrounds");
});


//exportar router (rutas)
module.exports = router;
