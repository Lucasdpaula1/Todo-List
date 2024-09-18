require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const db = require("./connectionDb");
const rotaTask = require("./routes/Task");
app.use("/task", rotaTask);
app.listen(port, () => {
  console.log("meu servidor está levantao na porta", port);
});
