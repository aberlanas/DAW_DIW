const express = require('express');
const path = require('path');
const app = express();

// Importamos MongoDB
const MongoClient = require('mongodb').MongoClient;
const mongoUrl="mongodb://localhost/mongoFallero";


// Paginas publicas (estaticas)
app.use(express.static(path.join(__dirname, 'public')));

// Escuchemos en un puerto
app.listen(3000,() => {
    console.log(" * [ Mongo Fallero ] UP and Running en http://localhost:3000");
});
