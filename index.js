
const express=require("express");
const app=express();
app.get("/", (req,res)=>{
    res.send("<h1>Welcome to my root page!!</h1>")
})
app.listen(4000,()=>{
    console.log("server is running on port 4000")
})

 