require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const db = require("./connectionDb");
const RouteUser = require("./routes/User");
app.use(express.json());
app.use("/user", RouteUser);

app.listen(port, () => {
  console.log("meu servidor está levantao na porta", port);
});
