const express =require("express");
const connection=require("./connection");
const router = require("./routes/url");
const { Url } = require("./models/url");
const staticRoute = require("./routes/staticRoute");
const path =require("path");
const userRouter= require("./routes/user");
const {restrictuserToLogin}=require("./middlewares/auth");
const cookieParser = require("cookie-parser");

const app=express();
const PORT= 8080;


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

connection("mongodb://127.0.0.1:27017/UrlShortner")
.then(()=>console.log("MongoDb Connected")
).catch((err)=>console.log("MongoDb Not Connected :",err));

app.use("/url",restrictuserToLogin,router);
app.use("/UrlShortner",staticRoute);
app.use("/user",userRouter);


app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs');
app.set("views", path.resolve("./views")); 


app.listen(PORT,()=>{
    console.log("Server Get Started at PORT: ",PORT);
})