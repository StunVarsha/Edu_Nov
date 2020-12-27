//Express allows us to make many urls which is not possible in case of inbuilt pacakage 
var express = require('express')
var app = express();
var port =8800;

app.get("/",function(req,res){
    res.send("This is the response from first server")
})
app.get("/second",function(req,res){
    res.send("This is the response from second 2nd  server")
})


app.listen(port,function(err){
    if (err) throw err;
    console.log(`Server is running on ${port} number`)
})