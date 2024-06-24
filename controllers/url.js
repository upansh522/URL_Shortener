const { Url } = require("../models/url");
const shortId = require("shortid");

async function handleGenerateNewShortUrl(req, res) {
    const body = req.body;

    if (!body || !body.redirectUrl) {
        return res.status(400).json("Error Occurred: redirectUrl is required");
    }

    const shortUrl = shortId.generate();

    try {
        await Url.create({
            shortUrl: shortUrl,
            redirectUrl: body.redirectUrl,
            visitHistory: []
        });

        res.status(201).json({ id: shortUrl }); // Respond with the generated shortUrl
    } catch (err) {
        console.error("Error creating short URL:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = { handleGenerateNewShortUrl };
