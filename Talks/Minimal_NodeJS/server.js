const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser');

// Middlewares
// Novedades sobre Express 4.16
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());

const port = process.env.PORT || 3000; // set our port

app.use("/", express.static(__dirname + "/public"));
app.use("/api/users", require("./src/routes/users.routes.js"));

app.listen(port, function () {
  console.log("Example app listening on port 3000!");
});
