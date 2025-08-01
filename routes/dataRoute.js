
const express=require("express");
const route=express.Router();
const dataController=require("../controller/dataController");

route.get("/",dataController.homePage);


module.exports=route;