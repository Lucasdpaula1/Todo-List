require("dotenv").config();
const db = require("../connectionDb");

module.exports = {
  up: async () => {
    const query = `CREATE TABLE task(
     id INT AUTO_INCREMENT PRIMARY KEY,
    description varchar(100) NOT NULL,
    isActive BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`;
    await db.query(query);
  },
  down: async () => {
    await db.query("DROP TABLE task;");
  },
};
