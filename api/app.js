const express = require('express')
const app = express()
const port = 3400
const mongo = require('mongodb')
const MongoClient = mongo.MongoClient;
const mongourl = "mongodb://localhost:27017";
let db;


// Health Check
app.get('/',(req,res)=>{
    res.send("Health is Ok!!!")
})

// City Route 
app.get('/city',(req,res)=>{
   db.collection('city').find().toArray((err,result)=>{
     if (err) throw err;
     res.send(result)
   })
    
})
//rest per city
app.get('/rest/:id',(req,res) =>{
  var id = req.params.id
  db.collection('restaurent').find({city:id}).toArray((err,result) => {
    if(err) throw err;
    res.send(result)
  })
})
// MealType Route
app.get('/mealType',(req,res)=>{
    db.collection('mealType').find().toArray((err,result)=>{
      if(err) throw err;
      res.send(result)
    })
    
})
// Restaurant Route
app.get('/rest',(req,res)=>{
  db.collection('restaurent').find().toArray((err,result)=>{
    if(err) throw err;
    res.send(result)
  })
  
})

// Cuisine Route
app.get('/cuisine',(req,res)=>{
  db.collection('cuisine').find().toArray((err,result)=>{
    if(err) throw err;
    res.send(result)
  })
  
})


//Connection with mongo server
MongoClient.connect(mongourl,(err,connection)=>{
  if(err) throw console.log(err);
  db = connection.db('varsha');
  app.listen(port, (err)=>{
    if(err) throw err;
    console.log(`Server is running on ${port}port number`)
})
})
