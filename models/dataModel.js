

const mongoose=require("mongoose");
const dataSchema=new mongoose.Schema({
    name:String,
    subject:String,
    city:String,
    fees:Number
})

module.exports=mongoose.model("student",dataSchema)