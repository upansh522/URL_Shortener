const mongoose=require("mongoose");

const urlSchema= new mongoose.Schema({
    shortUrl: {
        type: string,
        required: true,
        unique: true
    },

    redierctUrl: {
        type:string,
        required: true
    },

    visitHistory:[{
        timestamp: {type: Number}
    }]
},
{timestamp: true}
)

const Url=mongoose.model("Url",urlSchema);
module.exports= {urlSchema};