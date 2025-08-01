
const express=require("express");
const app=express();
const dataRoute=require("./routes/dataRoute");
const mongoose=require("mongoose");
const bodyparser=require("body-parser");

mongoose.connect("mongodb://127.0.0.1:27017/shivdb").then(()=>{
    console.log("Database connected successfully")
})

//Body parser middleware
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.set("view engine","ejs")
app.use("/",dataRoute);


app.listen(3000,()=>{
    console.log("Server is running on port 3000 ")
})