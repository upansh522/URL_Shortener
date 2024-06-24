const express =require("express");
const connection=require("./connection");
const router = require("./routes/url");

const app=express();
const PORT= 8080;
app.use(express.json());

connection("mongodb://127.0.0.1:27017/UrlShortner")
.then(()=>console.log("MongoDb Connected")
).catch((err)=>console.log("MongoDb Not Connected :",err));

app.use("/url",router)

app.listen(PORT,()=>{
    console.log("Server Get Started at PORT: ",PORT);
})