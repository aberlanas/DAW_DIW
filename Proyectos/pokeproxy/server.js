var express = require('express');
var proxy = require('http-proxy-middleware');
 
var app = express();
 
app.use(
  '/api/v2/',
    proxy({
	target: 'https://pokeapi.co/api/v2/',
	secure:false,
	changeOrigin: true,
	logLevel: 'debug'
    })
);
app.listen(3333);
