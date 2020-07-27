const express = require("express");
const bodyparse = require("body-parser");

const app = express();
app.use(bodyparse.urlencoded({extended:true}));
app.listen(3000,function(){
console.log("server is running on port 3000");
});
app.post("/",function(req,res){
   var weight = Number(req.body.w1);
   var height = Number(req.body.h1);
   var result = (weight/(height**2));
   res.send("the BMI index for your body is "+result);
});

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
