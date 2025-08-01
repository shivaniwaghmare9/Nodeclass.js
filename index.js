
const express=require("express");
const app=express();
const dataRoute=require("./routes/dataRoute")
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
mongoose.connect("mongodb://127.0.0.1:27017/shivdb").then(()=>{
    console.log("Database connected successfully");
})
app.set("view engine","ejs")
app.use("/",dataRoute)

//Body parser middleware
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());


app.listen(4000,()=>{
    console.log("server is running on port 4000")
})

 