const express =require("express");
const staticRoute=express.Router();
const { Url } = require("../models/url");

staticRoute.get("/",async (req,res)=>{
    const allUsers= await Url.find({});
    return res.render('home',{
        urls: allUsers
    });
});

module.exports= staticRoute;