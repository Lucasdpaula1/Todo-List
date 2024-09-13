const { up, down } = require("../migrations/Table");
const db = require("../connectionDb");

function criarModel() {
  try {
    // criar um novo esquema
    up();
  } catch (error) {
    console.log(error);
  }
}
function destroiModel() {
  try {
    down();
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
      console.log(this.password);
      const query = `INSERT INTO users (name,password,email) VALUES (?,?,?)`;
      await db.query(query, [this.name, this.password, this.email]);

      return "inserção feita com sucesso";
    } catch (error) {
      throw new Error("não foi possivel cadastrar o usuário");
    }
  }
}
module.exports = { User };
