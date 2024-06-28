const express=require("express");
const router=express.Router();
const {handleSignUpPost}= require("../controllers/user");

router.post("/signUp",handleSignUpPost);

module.exports=router;