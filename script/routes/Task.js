const express = require("express");
const rota = express.Router();
rota.post("/create", (req, response) => {
  response.send("a requisição está chegando");
});
module.exports = rota;
