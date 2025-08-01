
const dataModel=require("../models/dataModel")
const homepage=(req,res)=>{
    res.render("home");
}
const insertpage=(req,res)=>{
    res.render("insert");
}
const dataSave=async(req,res)=>{
    const {name,city,sub,fees}=req.body;
    const student=await dataModel.create({
        name:name,
        city:city,
        subject:sub,
        fees:fees
    })
    res.render("insert");
}
const displayPage=(req,res)=>{
    // const student=await dataModel.find();
    res.render("display");
}

module.exports={
    homepage,
    insertpage,
    dataSave,
    displayPage
}