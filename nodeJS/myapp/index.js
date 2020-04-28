const express = require('express');
const app = express();
const routing=require('./routing');

var session = require('express-session')
const parser=require('body-parser')

app.use(parser.urlencoded({extended:false}))

// ---


app.set('view engine', 'ejs');

app.use((request,response,next)=>{
    console.log(`${request.method} ${request.url}: ${new Date()}`)
    next();
})

// -------------------------

var session = require('express-session')

// app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized:true
}));

//-----------------------

app.use('/',routing);

app.use(express.static('public'));

app.listen(3000,()=>{
  console.log("server running at http://localhost:3000");
});



// --------------------------

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  
  const mangas = db.collection('mangas');
  mangas.insertMany([
    { name: "Bakuman"}, 
    { name: "One-Piece"}, 
    { name: "Attack-On-Titan"} 
    ])

  client.close();
});

// -----------------

