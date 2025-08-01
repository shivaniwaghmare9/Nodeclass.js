
const DataModel=require("../models/dataModel")
const homePage=(req,res)=>{
    res.render("home")
}
const insertPage=(req,res)=>{
    res.render("insert");
}
const 

module.exports={
    homePage,
    insertPage
}