
const DataModel=require("../models/dataModel")
const homePage=(req,res)=>{
    res.render("home")
}
const insertPage=(req,res)=>{
    res.render("insert");
}
const dataSave=async(req,res)=>{
    const {name,rollno,city,fees}=req.body;
    const student=await DataModel.create({
        name:name,
        rollno:rollno,
        city:city,
        fees:fees
    })
    console.log(req.body);
    res.render("insert");
}

module.exports={
    homePage,
    insertPage,
    dataSave
}