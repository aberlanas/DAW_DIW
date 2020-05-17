const express = require("express");
const cors = require("cors");
const app = express();

// Middlewares
// Novedades sobre Express 4.16

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 3000; // set our port

app.use("/", express.static(__dirname + "/public"));
app.use("/api/users",require("./src/routes/users.routes.js"));

app.listen(port, function () {
  console.log("Servidor Node Express en el puerto : "+port);
});




