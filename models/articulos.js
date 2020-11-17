var mongoose = require("mongoose");
 
var articuloSchema = new mongoose.Schema({
    titulo: String,
	autor: String,
	fecha: {
		dia: int,
		mes: String,
		año: int
	},
	texto: String,
	image: String
});
 
module.exports = mongoose.model("Articulo", articuloSchema);