
const express=require("express");
const app=express();
app.get("/", (req,res)=>{
    res.send("<h1>Welcome to my root page!!</h1>")
})
app.get("/home", (req,res)=>{
    res.send("<h1>Welcome to my home page!!</h1>")
})
app.get("/about", (req,res)=>{
    res.send("<h1>Welcome to my about page!!</h1>")
})
app.get("/service", (req,res)=>{
    res.send("<h1>Welcome to my service page!!</h1>")
})
app.get("/photo", (req,res)=>{
    res.send("<h1>Welcome to my photo page!!</h1>")
})
app.get("/contact", (req,res)=>{
    res.send("<h1>Welcome to my contact page!!</h1>")
})
app.listen(4000,()=>{
    console.log("server is running on port 4000")
})

 