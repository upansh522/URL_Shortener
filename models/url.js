const mongoose = require("mongoose");
const Users = require("./user");

const urlSchema = new mongoose.Schema({
    shortUrl: {
        type: String, 
        required: true,
        unique: true
    },
    redirectUrl: { 
        type: String, 
        required: true
    },
    visitHistory: [{
        timestamp: { type: Number }
    }],
    CreatedBy: mongoose.Schema.Types.ObjectId,
    ref:"Users"
}, 
{ timestamps: true });

const Url = mongoose.model("Url", urlSchema);
module.exports = { Url };
