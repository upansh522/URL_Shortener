const express = require("express");
const staticRoute = express.Router();
const { Url } = require("../models/url");
const {restrictuserToLogin}=require("../middlewares/auth")

// Route to render home page
staticRoute.get("/homePage",restrictuserToLogin,async (req, res) => {
    try {
        const User__id = req.user._id;
        const allUsers = await Url.find({CreatedBy: User__id });
        return res.render('home', {
            urls: allUsers
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});

// Route to render signup page
staticRoute.get("/signupPage", (req, res) => {
    return res.render('signup');
});

// Route to render login page
staticRoute.get("/LoginPage", (req, res) => {
    return res.render('login');
});

module.exports = staticRoute;
