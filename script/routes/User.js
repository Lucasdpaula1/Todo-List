const express = require("express");
const route = express.Router();
const { User } = require("../models/User");
const { resolveNaptr } = require("dns");

route.post("/create", async (req, response) => {
  try {
    const { name, senha, password } = req.body;

    const CriarUser = await new User(name, senha, password).CreateUser();
    response.send(CriarUser);
  } catch (error) {
    response.send(error);
  }
});

module.exports = route;
