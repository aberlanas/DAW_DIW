var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use(
    '/api',
    proxy({
        target: 'https://pokeapi.co/',
        //secure: false,
        changeOrigin: true,
        logLevel: 'debug'
    })
);
app.listen(3333);