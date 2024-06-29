const express =require("express");
const staticRoute=express.Router();
const { Url } = require("../models/url");

staticRoute.get("/HomePage",async (req,res)=>{
    const allUsers= await Url.find({});
    return res.render('home',{
        urls: allUsers
    });
});
staticRoute.get("/signupPage",async (req,res)=>{
    return res.render('signup');
})
staticRoute.get("/LoginPage",async (req,res)=>{
    return res.render("login");
})

module.exports= staticRoute;