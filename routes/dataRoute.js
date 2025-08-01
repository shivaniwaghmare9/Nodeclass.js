
const express=require("express");
const route=express.Router();
const dataController=require("../controller/dataController");

route.get("/",dataController.homePage);
route.get("/insert",dataController.insertPage);
route.post("/dataSave",dataController.dataSave);


module.exports=route;