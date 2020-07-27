const express = require("express");
const https = require("https");
const bodyparser = require("body-parser")
const app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.get("/",function(req,res){
  res.sendfile(__dirname+"/index.hmtl");
});
app.post("/",function(req,res){
  console.log(req.body.cityname);
});
  // const query = "";
  // const apikey = "a298c165c628cbfdc365805eb8e5be33";
  //
  // url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units%20=temparature"
  // https.get(url,function(response){
  //   console.log(response.statusCode);
  //   response.on("data",function(data){
  //     const wd = JSON.parse(data);
  //     const dt = wd.main.temp;
  //     const wds = wd.sys.country;
  //     const temp_k = wd.main.temp;
  //     const temp  = temp_k - 273;
  //     const icon = wd.weather[0].icon;
  //     const imageurl  = "https://openweathermap.org/img/wn/"+icon+"d@2x.png";
  //
  //     console.log(wds);
  //     res.write("<h1>The temparature in london is"+ temp +" degree celcuis</h1>");
  //     res.write("<h3> the country being "+wds+"</h3>");
  //     res.write("<img src="+ imageurl+">");
  //     res.send()
//     })
//   })
// });


app.listen(3000,function(){
  console.log("server is running on port 3000");
});
