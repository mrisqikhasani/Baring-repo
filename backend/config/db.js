const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();

const createConnection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });

    console.log('Connected to the MySQL database.')
    return connection;

  } catch (error) {
    throw error;
  }
};

  module.exports = { createConnection };
