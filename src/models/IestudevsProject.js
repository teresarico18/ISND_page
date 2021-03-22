const mongoose = require("mongoose");

const IestudevsProject = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    imgUrl : {
        type : String,
        required : true,
    },
    target : {
        type : String,
        required : true
    },
    shortDescription : {
        type : String,
        required : true,
    },
    description : String,
    release : Date,
    developers : {
        type : [String],
        required : true
    },
    stack : [String],
});

module.exports = mongoose.model("IestudevsProject",IestudevsProject);