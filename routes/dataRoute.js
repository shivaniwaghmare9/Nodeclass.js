
const express=require("express");
const route=express.Router();
const dataController=require("../controllers/dataController");

route.get("/",dataController.homepage);
route.get("/insert",dataController.insertpage);

module.exports=route;