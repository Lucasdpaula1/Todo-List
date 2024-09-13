const express = require("express");
const route = express.Router();
const { CreateUser } = require("../controllers/User");

route.post("/create", CreateUser);

module.exports = route;
