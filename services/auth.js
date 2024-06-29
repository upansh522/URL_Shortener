const sessionIdToUser= new Map();

function setSSID(sessionId,user){
    return sessionIdToUser.set(sessionId,user);
}

function getSSID(sessionId,user)
{
    return sessionIdToUser.get(sessionId);
}


module.exports={setSSID,getSSID};