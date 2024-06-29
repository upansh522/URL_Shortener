const {setSSID,getSSID}=require("../services/auth");

function restrictuserToLogin(req,res,next){
    const uid=req.cookies.uid;

    if (!uid)
        return res.redirect("/UrlShortner/LoginPage");

    const user=getSSID(uid);

    if (!user)
        {
            return res.redirect("/UrlShortner/LoginPage");
        }
    else{
        req.user=user;
        console.log(req.user);
    }    
    next();
}

module.exports={restrictuserToLogin};