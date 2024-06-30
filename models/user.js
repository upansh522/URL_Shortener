const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: false
    },
    EmailId: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
