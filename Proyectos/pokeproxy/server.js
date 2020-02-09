var express = require('express');
var proxy = require('http-proxy-middleware');
var cors = require('cors');

var app = express();

//app.use(cors());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(
    '/api',
    proxy({
        target: 'https://pokeapi.co/',
        secure: false,
        changeOrigin: true,
        logLevel: 'debug'
    })
);
app.listen(3333);
