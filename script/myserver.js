const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql2/promise");

app.listen(port, () => {
  console.log("meu servidor está levantao na porta", port);
});
