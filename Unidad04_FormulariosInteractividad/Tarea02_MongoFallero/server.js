const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Nos conectaremos a la base de datos
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');


// Utilizaremos body-parser para "parsear lo que nos pidan"
app.use(bodyParser.urlencoded({
    extended:true
}));

//Parsearemos los jsones
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

// Conectando en si mismo
mongoose.connect(dbConfig.url,{
    useNewUrlParser:true}).then(()=>{
        console.log(" * Cargada y preparada en 2019");
    }).catch(err => {
        console.log(" Algo ha pasado...saliendo : ",err);
        process.exit();
    });

// Vamos a definir un "punto de inicio"
app.get('/api/',(req,res)=>{
    res.json({"message":"API de MongoFallero"});
});

// Paginas publicas (estaticas)
app.use(express.static(path.join(__dirname, 'public')));


// Require Puntuaciones routes
require('./app/routes/puntuaciones.routes.js')(app);


// Escuchemos en un puerto
app.listen(3000,() => {
    console.log(" * [ Mongo Fallero ] UP and Running en http://localhost:3000");
});
