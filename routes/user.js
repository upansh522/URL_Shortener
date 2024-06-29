const express=require("express");
const router=express.Router();
const {handleSignUpPost,
    handleLoginPost
}= require("../controllers/user");

router.post("/signup",handleSignUpPost);
router.post("/login",handleLoginPost);

module.exports=router;