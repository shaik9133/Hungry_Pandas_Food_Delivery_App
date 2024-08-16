const express = require('express');
const router=express.Router();
const authController=require("../controllers/authController.js")

router.post("/sigup",authController.register);
router.post("/signin,authController.login");


module.exports=router;