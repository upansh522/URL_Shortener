const express =require("express");
const connection=require("./connection");
const router = require("./routes/url");
const { Url } = require("./models/url");
const staticRoute = require("./routes/staticRoute");
const path =require("path");

const app=express();
const PORT= 8080;
app.use(express.json());
app.use(express.urlencoded({extended: false}));

connection("mongodb://127.0.0.1:27017/UrlShortner")
.then(()=>console.log("MongoDb Connected")
).catch((err)=>console.log("MongoDb Not Connected :",err));

app.use("/url",router);
app.use("/userRender",staticRoute);
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs');
app.set("views", path.resolve("./views")); 


app.listen(PORT,()=>{
    console.log("Server Get Started at PORT: ",PORT);
})