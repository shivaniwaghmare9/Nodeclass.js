
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
const displayPage=async(req,res)=>{
    const student=await dataModel.find();
    res.render("display",{Data:student});
}
const updatePage=async(req,res)=>{
    const student=await dataModel.find();
    res.render("update",{Data:student});
}
const dataDelete=async(req,res)=>{
    const {id}=req.query;
    await dataModel.findByIdAndDelete(id);
    const student=await dataModel.find();
    res.render("update",{Data:student})
}
const editPage=async(req,res)=>{
    const {id}=req.query;
    const student=await dataModel.findById(id);
    console.log(student)
    res.render("editdata",{Data:student})
}
module.exports={
    homepage,
    insertpage,
    dataSave,
    displayPage,
    updatePage,
    dataDelete,
    editPage
}