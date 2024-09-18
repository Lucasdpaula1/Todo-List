const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const db = require("../connectionDb");

module.exports = {
  CreateUser: async (req, response) => {
    try {
      const { name, email, password } = req.body;
      const query = `SELECT * FROM users WHERE email = '${email}';`;
      const [retornoDaQuery] = await db.query(query);

      console.log(retornoDaQuery);
      if (retornoDaQuery.length != 0) {
        console.log("está entrando aqui");
        throw new Error("usuário ja cadastrado");
      }

      const CriarUser = await new User(name, email, password).CreateUser();
      console.log("ola planeta");

      response.json(CriarUser);
    } catch (error) {
      console.log("não ta chetgando aqui");

      response.send(error.message);
    }
  },
  DeleteUser: async (req, response) => {
    console.log("irei deleter o usuário");
  },
};
