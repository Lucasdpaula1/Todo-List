const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const db = require("../connectionDb");
const { throwDeprecation } = require("process");
const { error } = require("console");

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
    const { Id, Name, Email } = req.body;

    try {
      const query = `select * from users where email ='${Email}';`;
      const [result] = await db.query(query);
      console.log(result.length);

      if (result.length === 0) {
        console.log("estou executando isso");
        throw error;
      }
      const RemoverUser = await new User(
        Name,
        Email,
        undefined,
        Id
      ).DeleteUser();

      response.send(RemoverUser);
    } catch (error) {
      response.send("não foi possivel excluir o usuário");
    }
  },
};
