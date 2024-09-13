require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const db = require("./connectionDb");

app.listen(port, () => {
  console.log("meu servidor está levantao na porta", port);
});
