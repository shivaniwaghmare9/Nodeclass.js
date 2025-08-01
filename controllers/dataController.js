
const dataModel=require("../models/dataModel")
const homepage=(req,res)=>{
    res.render("home");
}
const insertpage=(req,res)=>{
    res.render("insert");
}
const dataSave=async(req,res)=>{
    const {name,city}=req.body;
    const student=await dataModel.create({
        name:name,
        city:city
    })
    res.render("insert");
}

module.exports={
    homepage,
    insertpage,
    dataSave
}