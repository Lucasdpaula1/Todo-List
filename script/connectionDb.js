const mysql = require("mysql2/promise");
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
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
  console.log("está em promesi");
};

main();
module.exports = db;
