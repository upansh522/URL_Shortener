const jwt =require('jsonwebtoken');
require('dotenv').config();
const secretPassword = process.env.SECRET_PASSWORD;

function setSSID(user){
    return jwt.sign(
        {_id: user._id}
        ,secretPassword);
}

function getSSID(token,password)
{
    if (!token)
        {
            return res.redirect('/UrlShortner/LoginPage');
        }
        else{
            try {
                return jwt.verify(token,password);
            } catch (error) {
                return res.redirect('/UrlShortner/LoginPage');
            }

    
        }
}


module.exports={setSSID,getSSID};