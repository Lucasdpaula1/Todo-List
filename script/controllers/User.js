const { User } = require("../models/User");

module.exports = {
  CreateUser: async (req, response) => {
    try {
      const { name, email, password } = req.body;
      console.log(name);

      const CriarUser = await new User(name, email, password).CreateUser();

      response.json(CriarUser);
    } catch (error) {
      response.send(error);
    }
  },
  DeleteUser: () => {
    console.log("irei deleter o usuário");
  },
};
