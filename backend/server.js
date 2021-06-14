const http = require("http");

const hostname = '127.0.0.1';
const port = 3005;


    const url = require('url');
    // const bodyParser = require('body-parser');
    const mongoose = require('mongoose');
    const User = require('../model/User');    
    // var jsonParser = bodyParser.json();
    // const path = req.url;


const server = require('./controller');

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


// // http module Node server

// const { json } = require("body-parser");
// const http = require("http");
// const { join } = require("path");

// const { parse } = require('querystring');


// const app = http.createServer((req,res) =>{

    
//     const url = require('url');
//     const bodyParser = require('body-parser')
//     const mongoose = require('mongoose');
//     const User = require('../model/User');    
//     // var jsonParser = bodyParser.json();
//     const path = req.url;

//     console.log(req.url);
//     console.log("Req.URL",req.url);
//     if(req.url === '' || req.url ==="/" && req.method == 'GET' ){
//         console.log("DOne done") ; 

//         var MongoClient = require('mongodb').MongoClient;
//         var urlm = "mongodb://localhost:27017/userdb";
//         // var urlm = "mongodb+srv://root:root123@cluster0.eohjm.mongodb.net/userdb?retryWrites=true&w=majority";


//         MongoClient.connect(urlm, function(err, db) {
//         if (err) throw err;
//         console.log("Database created!");
//         console.log("Collection created!");

//         var dbo = db.db("userdb");
//         dbo.collection("users").find({}).toArray(function(err, result) {
//           if (err) throw err;
//           var output= JSON.stringify(result)
//           console.log(output);

//           res.setHeader('Content-Type', 'application/json');
//           res.write(output);
//           res.end();  

//             db.close();
//         });
//         });


        
//     }
//    else if(req.url === "/save" && req.method == 'POST'  ){
//     console.log("inside save API ") ;

//     let body = '';
//     req.on('data', chunk => {
//         body += chunk.toString();
//     });
//     req.on('end', () => {
//         console.log(
//             parse(body)
//         );
//         res.end(body);
//         console.log('ok ji..',body)
//     });

//     var MongoClient = require('mongodb').MongoClient;
//     var urlm = "mongodb://localhost:27017/userdb";
//     // var urlm = "mongodb+srv://root:root123@cluster0.eohjm.mongodb.net/userdb?retryWrites=true&w=majority";

//     MongoClient.connect(urlm, function(err, db) {    
        
//     if (err) throw err;

//     var dbo = db.db("userdb");
//     var jsonObj = JSON.parse(body);        
//     var myobj = {body};
//     console.log("Post Data BODY is ",jsonObj);
    
//     dbo.collection("users").insertOne(jsonObj, function(err, res) {  
//     if (err) throw err;  
//     console.log("1 record inserted");     

//     db.close();
//     });
//     });
// }

// else if(req.url ==="/user:id" && req.method == 'PUT'  ){
    
//     console.log("===> ",req.url)
//  console.log("inside update API ") ;

//  let body = '';
//  req.on('data', chunk => {
//      body += chunk.toString();
//  });
//  req.on('end', () => {
//      console.log(
//          parse(body)
//      );
//      res.end(body);
//  });

// //  var MongoClient = require('mongodb').MongoClient;
// //  var urlm = "mongodb://localhost:27017/userdb";

// //  MongoClient.connect(urlm, function(err, db) {
     
     
// //  if (err) throw err;

// //  var dbo = db.db("userdb");
//  var jsonObj = JSON.parse(body);        
// //  var myobj = {body};
//  console.log("Put Data BODY is ",jsonObj);
 
// //  dbo.collection("users").insertOne(jsonObj, function(err, res) {  
// //  if (err) throw err;  
// //  console.log("1 record inserted");     

//     //  db.close();
// //  });
// //  });
// }

// }).listen(3005,()=>{
//     console.log('server is running on 3005 port');
// });