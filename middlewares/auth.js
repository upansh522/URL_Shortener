const {getSSID}=require("../services/auth");
require('dotenv').config();
const secretPassword = process.env.SECRET_PASSWORD;

function restrictuserToLogin(req,res,next){
    const token=req.cookies.uid;

    if (!token)
        return res.redirect("/UrlShortner/LoginPage");

    else{      
        try {
            const user=getSSID(token,secretPassword);
            if (!user)
                {
                    return res.redirect("/UrlShortner/LoginPage");
                }
            else{
                req.user=user;
            }    
            
        } catch (error) {
            return res.redirect("/UrlShortner/LoginPage");
        }       
}
next();
}

module.exports={restrictuserToLogin};