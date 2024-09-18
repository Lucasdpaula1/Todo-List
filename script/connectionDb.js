const mysql = require("mysql2/promise");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "todolist",
  password: "1234",
  port: "3307",
  connectionLimit: 10,
});
const main = async () => {
  try {
    await db.getConnection();
    console.log("conexão realizada com sucesso com o banco de dados");
  } catch (error) {
    console.log("não");
  } finally {
    db.releaseConnection();
  }
};

main();
module.exports = db;
