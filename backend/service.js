

exports.postRequest = function (req, res) {

    console.log("inside save API ") ;

    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    // req.on('end', () => {
    //     console.log(
    //         parse(body)
    //     );
        // res.end(body);
        // console.log('ok ji..',body)
    // });

    var MongoClient = require('mongodb').MongoClient;
    var urlm = "mongodb://localhost:27017/userdb";
    // var urlm = "mongodb+srv://root:root123@cluster0.eohjm.mongodb.net/userdb?retryWrites=true&w=majority";

    MongoClient.connect(urlm, function(err, db) {    
        
    if (err) throw err;

    var dbo = db.db("userdb");
    var jsonObj = JSON.parse(body);        
    var myobj = {body};
    console.log("Post Data BODY is ",jsonObj);
    
    dbo.collection("users").insertOne(jsonObj, function(err, res) {  
    if (err) throw err;  
    console.log("1 record inserted");     
    
    db.close();
    });
    });


    // body = '';
    // req.on('data', function (chunk) {
    //     body += chunk;
    // });
    // req.on('end', function () {

    //     postBody = JSON.parse(body);

    //     var response = {
    //         "text": "Post Request Value is  " + postBody.value
    //     };

    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'application/json');
    //     res.end(JSON.stringify(response));
    // });
};

exports.invalidRequest = function (req, res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Invalid Request');
};

const url = require('url');
exports.getRequest = function (req, res) {
    console.log("inside...")


    var MongoClient = require('mongodb').MongoClient;
    var urlm = "mongodb://localhost:27017/userdb";
    // var urlm = "mongodb+srv://root:root123@cluster0.eohjm.mongodb.net/userdb?retryWrites=true&w=majority";


    MongoClient.connect(urlm, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    console.log("Collection created!");

    var dbo = db.db("userdb");
    dbo.collection("users").find({}).toArray(function(err, result) {
        if (err) throw err;
        var output= JSON.stringify(result)
        console.log(output);

        res.setHeader('Content-Type', 'application/json','Access-Control-Allow-Origin', req.headers.origins);
        
        res.write(output);
        res.end();  

        db.close();
    });
    });


            

    // const reqUrl = url.parse(req.url, true);
    // var name = 'World';
    // if (reqUrl.query.name) {
    //     name = reqUrl.query.name
    // }

    // var response = {
    //     "text": "Hello " + name
    // };

    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'application/json');
    // res.end(JSON.stringify(response));
};