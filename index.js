const express =require("express");
const connection=require("./connection");
const router = require("./routes/url");
const path =require("path");
const { Url } = require("./models/url");

const app=express();
const PORT= 8080;
app.use(express.json());

connection("mongodb://127.0.0.1:27017/UrlShortner")
.then(()=>console.log("MongoDb Connected")
).catch((err)=>console.log("MongoDb Not Connected :",err));

app.use("/url",router)
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set("views", path.resolve("./views"));
 
app.get("/test",async (req,res)=>{
    const allUsers= await Url.find({});
    return res.render('home',{
        urls: allUsers
    });
});

app.listen(PORT,()=>{
    console.log("Server Get Started at PORT: ",PORT);
})