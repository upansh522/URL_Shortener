const express =require("express");

const router=express.Router();
const {handleGenerateNewShortUrl,
    handleRenderShortUrl
}= require("../controllers/url");


router.route("/").post(handleGenerateNewShortUrl);

router.route("/:id").get(handleRenderShortUrl);

module.exports= router