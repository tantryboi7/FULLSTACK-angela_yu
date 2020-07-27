const express = require("express");
const https = require("https");
const bodyparser = require("body-parser")
const app = express();
app.use(express.static("public")) //for use of files from private server and make it public
app.use(bodyparser.urlencoded({extended:true}));


app.get("/",function(req,res){
  res.sendFile(__dirname + "/signup.html");
});
app.post("/",function(req,res){
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  var data ={       //sending data using the members (email_address and status, which are members on mail mailchimp)
    members: [      // as well , hence we use members to access members, merge feidks of first,last name, email and
      {                 // status of the show

        email_address: email,
        status: "subscribed",
        merge_fields: { //can be changed by audience-> settings->merge.
          FNAME : fname,
          LNAME : lname
        }
         }
    ]
  } ;


  const jsonData = JSON.stringify(data);//used to chage data into strin

  const url = 'https://us10.api.mailchimp.com/3.0/lists/59f8d076b8';// the ulr in the parameters section and the X is replaced by the unique id of your api key

  const options = { // we have mehtods inside options and we are posting it , hence method is post
    method :"POST",
    auth: "tantry:a6701d4663530f4f9435b1cfffeea1a8-us10"
  }
   //for request pf the mailchimp using request method

  const request = https.request(url, options,function(response){
    if (response.statusCode=== 200 ){
      res.sendFile(__dirname + "/success.html");
    }else{
      res.sendFile(__dirname + "/failure.html");
    }

    response.on("data",function(data){

    console.log(JSON.parse(data));
    })
  })
  request.write(jsonData);
  request.end();
});
app.post("/failure",function(req,res){
  res.redirect("/");
});

app.listen(process.env.PORT || 3000,function(){
  console.log("server running on port 3000");
});



//a6701d4663530f4f9435b1cfffeea1a8-us10
//
