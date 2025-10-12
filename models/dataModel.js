

const mongoose=require("mongoose");
const dataSchema=new mongoose.Schema({
    name:String,
    city:String,
    subject:String,
    fees:Number
})

module.exports=mongoose.model("student",dataSchema)