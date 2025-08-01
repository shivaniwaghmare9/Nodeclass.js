
const express=require("express");
const app=express();
const dataRoute=require("./routes/dataRoute");

app.set("view engine","ejs")
app.use("/",dataRoute);


app.listen(3000,()=>{
    console.log("Server is running on port 3000 ")
})