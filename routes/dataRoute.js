
const express=require("express");
const route=express.Router();
const dataController=require("../controllers/dataController");

route.get("/",dataController.homepage);
route.get("/insert",dataController.insertpage);
route.post("/save",dataController.dataSave);
route.get("/display",dataController.displayPage);
route.get("/update",dataController.updatePage);

module.exports=route;