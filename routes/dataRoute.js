
const express=require("express");
const route=express.Router();
const dataController=require("../controllers/dataController");

route.get("/",dataController.homepage);
route.get("/insert",dataController.insertpage);
route.post("/save",dataController.dataSave);
route.get("/display",dataController.displayPage);
route.get("/update",dataController.updatePage);
route.get("/deletedata",dataController.dataDelete);
route.get("/editdata",dataController.editPage);
route.post("/editsave",dataController.editData)
route.post("/search",dataController.searchPage)


module.exports=route;