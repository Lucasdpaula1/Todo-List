const { createBrotliCompress } = require("zlib");
require("dotenv").config();
const db = require("../connectionDb");
const { config } = require("dotenv");
module.exports = {
  up: async () => {
    try {
      const createTableUser = `CREATE TABLE users ( id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      password INT NOT NULL,
      email VARCHAR(100) NOT NULL,
      created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  
      );`;
      await db.query(createTableUser);
    } catch (error) {
      throw new Error(error);
    }
  },
};
