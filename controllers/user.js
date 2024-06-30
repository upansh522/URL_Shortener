const Users = require("../models/user");
const { v4: uuidv4 } = require('uuid');
const {setSSID}=require("../services/auth");

async function handleSignUpPost(req, res) {
    const body = req.body;
    if (!body || !body.FirstName || !body.LastName || !body.EmailId || !body.Password) {
        return res.status(400).json({ status: "BadRequest", message: "All fields are required." });
    }
    else{
        const sessionId = uuidv4();
        res.cookie('uid',sessionId);        

    try {
        const createUser = await Users.create({
            FirstName: body.FirstName,
            LastName: body.LastName,
            EmailId: body.EmailId,
            Password: body.Password
        });
        setSSID(sessionId,createUser);
        res.status(201).redirect("/UrlShortner/homepage");
    } catch (error) {
        return res.status(500).redirect("/UrlShortner/signupPage");
    }
  }  
}

async function handleLoginPost(req,res){
    const {EmailId,Password}=req.body;

    const user=await Users.findOne({EmailId,Password});    
    if (!user)
        {

            res.redirect("/UrlShortner/LoginPage");
        }
    else{
        const sessionId=uuidv4();
        setSSID(sessionId,user);
        res.cookie("uid",sessionId);
        try {            
            return res.redirect('/UrlShortner/homepage');
        } catch (err) {
            console.alert("404");
            res.redirect("/UrlShortner/LoginPage");
        }
    }
}

module.exports = {
    handleSignUpPost,
    handleLoginPost,
};
