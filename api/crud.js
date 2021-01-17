const express = require('express');
const app =express();
const port=process.env.PORT || 7800;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const bodyparser = require('body-parser');
const cors = require('cors');
const mongourl = "mongodb://localhost:27017";
let db;
let col_name="users";
app.use(cors());
//Encoded data while insert
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());


//Health Check
app.get('/health',(req,res)=>{
    res.status(200).send("Health Okk");
})

//Post = Add data to the database using an api
app.post('/addUser',(req,res)=>{
    db.collection(col_name).insert(req.body,(err,result)=>{
        if(err) throw err;
        res.status(200).send("Data Added");
    })
})

//Get = To read the data from an api
app.get('/users',(req,res)=>{
    db.collection(col_name).find().toArray((err,result)=>{
        if(err) throw err;
        res.status(200).send(result);
    })
})
//get
app.get('/users',(req,res) => {
    var query = req.query.city
    if(req.query.city){
        query={city:req.query.city,isActive:true}
    }else{
        query={isActive:true}
    }
    db.collection(col_name).find(query).toArray((err,result) => {
        if(err) throw err;
        res.status(200).send(result)
    })
})

//getUSer Details
//get
app.get('/users/:id',(req,res) => {
    var id = mongo.ObjectID(req.params.id)
    db.collection(col_name).find({_id:id,isActive:true}).toArray((err,result) => {
        if(err) throw err;
        res.status(200).send(result)
    })
})

//Put = To update the data 
app.put('/updateUser',(req,res)=>{
    var id = mongo.ObjectID(req.body._id);
    db.collection(col_name).update(
        {_id : id },
        {
            $set:{
                name:req.body.name,
                address:req.body.address,
            
                role:req.body.role,
                isActive:true
            }
        },(err,result)=>{
            if(err) throw err;
            res.status(200).send('Data Updated')
        }
    )
})

//delete user
//soft delete

app.put('/softDeleteUser',(req,res) => {
    var id = mongo.ObjectID(req.body._id)
    db.collection(col_name).update(
        {_id:id},
        {
            $set:{
                isActive:false
            }
        },(err,result) => {
            if(err) throw err;
            res.status(200).send('Data Updated')
        }
    )
});

//Reactive
app.put('/activateUser',(req,res) => {
    var id = mongo.ObjectID(req.body._id)
    db.collection(col_name).update(
        {_id:id},
        {
            $set:{
                isActive:true
            }
        },(err,result) => {
            if(err) throw err;
            res.status(200).send('Data Updated')
        }
    )
});

//hard delete
app.delete('/deleteUser',(req,res) => {
    var id = mongo.ObjectID(req.body._id)
    db.collection(col_name).remove({_id:id},(err,result)=>{
        if(err) throw err;
        res.status(200).send("Data Removed")
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
  