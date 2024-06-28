const Users = require("../models/user");

async function handleSignUpPost(req, res) {
    const body = req.body;
    if (!body || !body.FirstName || !body.LastName || !body.EmailId || !body.Password) {
        return res.status(400).json({ status: "BadRequest", message: "All fields are required." });
    }

    try {
        const createUser = await Users.create({
            FirstName: body.FirstName,
            LastName: body.LastName,
            EmailId: body.EmailId,
            Password: body.Password
        });
        res.status(201).json({ status: "successful", user: { id: createUser.id, FirstName: createUser.FirstName, LastName: createUser.LastName, EmailId: createUser.EmailId } });
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message });
    }
}

module.exports = {
    handleSignUpPost,
};
