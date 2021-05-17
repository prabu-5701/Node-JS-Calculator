const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/about",function(req,res){
    res.send("<h1>I am Vigeshwaraprabu S :)</h1>");
});

app.post("/",function(req,res){
    var n1 = req.body.num1;
    var n2 = req.body.num2;
    var ans = n1*n2;
    res.send("<h1>Multiplication is: " + ans + "</h1>");
});

app.listen(4444,function(){
    console.log("Server has started on port 4444");
});