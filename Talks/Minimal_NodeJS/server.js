const express = require('express');
const app = express();

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,accept,access_token,X-Requested-With');
  next();
});

var port = process.env.PORT || 3000;        // set our port

var router = express.Router();    

app.get('/api/registraUsuarios', function (req, res) {
  console.log(req);
  console.log(" Petición GET ");
    res.send({usuario:"Angel"});

  });

app.use('/static', express.static(__dirname + '/public'));

app.listen(port, function () {
    console.log('Example app listening on port 3000!');
  });

