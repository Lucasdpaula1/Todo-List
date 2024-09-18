const { User } = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  CreateUser: async (req, response) => {
    try {
      const { name, email, password } = req.body;

      const CriarUser = await new User(name, email, password).CreateUser();
      console.log("ola planeta");

      response.json(CriarUser);
    } catch (error) {
      response.send(error);
    }
  },
  DeleteUser: () => {
    console.log("irei deleter o usuário");
  },
};
