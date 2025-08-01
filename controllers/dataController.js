
const dataModel=require("../models/dataModel")
const homepage=(req,res)=>{
    res.render("home");
}
const insertpage=(req,res)=>{
    res.render("insert");
}
const dataSave=async(req,res)=>{
    const {nm,ct}=req.body;
    const student=await dataModel.create({
        name:nm,
        city:ct
    })
    res.render("insert");
}

module.exports={
    homepage,
    insertpage,
    dataSave
}