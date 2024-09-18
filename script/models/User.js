const { up, down } = require("../migrations/Table");
const db = require("../connectionDb");
const bcript = require("bcrypt");

function criarModel() {
  try {
    // criar um novo esquema
    up();
  } catch (error) {
    console.log(error);
  }
}
async function destroiModel() {
  try {
    await down();
  } catch (error) {
    console.log("não foi possivel destruir o banco de dados", down);
  }
}

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  async CreateUser() {
    try {
      const camadaDeSeguranca = 10;
      const senhaUser = this.password;
      const senhaHash = bcript.hashSync(senhaUser, camadaDeSeguranca);

      const query = `INSERT INTO users (name,password,email) VALUES (?,?,?)`;
      await db.query(query, [this.name, senhaHash, this.email]);

      return "inserção feita com sucesso";
    } catch (error) {
      throw new Error("não foi possivel cadastrar o usuário");
    }
  }
}
module.exports = { User };
