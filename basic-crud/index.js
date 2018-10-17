//Receive data from JSON POST and insert into MongoDB

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient
var db;


var MongoClient = require('mongodb').MongoClient;

  var url = 'mongodb://localhost:27017'; // remove the db name.
    MongoClient.connect(url, (err, client) => {
       var db = client.db("convivencia");
       db.collection('convivencia').find({}).toArray(function(err, docs) {

        // Print the documents returned
        docs.forEach(function(doc) {
            console.log(doc);
        });

        // Close the DB
        client.close();
        });

    });
    app.listen(3000);
}
});



//Establish Connection
MongoClient.connect('mongodb://localhost:27017/convivencia', function (err, database) {
   if (err) 
   	throw err
   else
   {
	db = database;
	console.log('Connected to MongoDB');
	//Start app only after connection is ready
	app.listen(3000);
   }
 });

app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/crud.html'));
});

app.post('/', function(req, res) {
   // Insert JSON straight into MongoDB
  db.collection('convivencia').insert(req.body, function (err, result) {
      if (err)
         res.send('Error');
      else
        res.send('Success');

  });
});

app.get('/mongo/',function(req,res){
    res.send(db.collection('convivencia').find());
});
