
const express=require("express");
const app=express();
const dataRoute=require("./routes/dataRoute")
app.set("view engine","ejs")
app.use("/",dataRoute)


app.listen(4000,()=>{
    console.log("server is running on port 4000")
})

 