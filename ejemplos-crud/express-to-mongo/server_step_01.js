
const express = require('express');
const bodyParser = require('body-parser');

// Creamos la app de express

const app = express();


// Utilizaremos body-parser para "parsear lo que nos pidan"
app.use(bodyParser.urlencoded({extended:true}));


// Parsearemos los jsones
app.use(bodyParser.json());

// Vamos a definir un "punto de inicio"
app.get('/',(req,res)=>{
    res.json({"message":"Parte Backend de nuestro programa"});
});


// Escuchemos en un puerto

app.listen(3000,() => {
    console.log(" * Server EUW UP and Running");
});

