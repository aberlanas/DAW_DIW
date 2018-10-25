const express = require('express');
const bodyParser = require('body-parser');

const app = express();


// Escuchemos en un puerto

app.listen(3000,() => {
    console.log(" * Server EUW UP and Running");
});
