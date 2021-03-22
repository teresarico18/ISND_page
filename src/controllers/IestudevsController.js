const IestudevsProject = require("../models/IestudevsProject");

module.exports = {
    async fetchProjects(req,res){
        const projects = await IestudevsProject.find();
        if(projects){
            return res.status(200).json(projects);
        }
        else{
            return res.status(300).json({"error" : "Ups! Something happened!"})
        }
    },
    async uploadProject(req,res){
        console.log(req.body);
        const {title,imgUrl,target,shortDescription,description,release,developers,stack} = req.body;
        const project = await IestudevsProject.create({
            title,
            imgUrl,
            target,
            shortDescription,
            description,
            release,
            developers,
            stack
        });
        if(project){
            return res.status(200).json(project);
        }
        else{
            return res.status(400);
        }
    },
    async uptadeProject(req,res){

    },
    async deleteProject(req,res){

    }
}