const { createConnection } = require("../db.js");

// getMovie
const getMovieModels = async () => {
  try {
    const connection = await createConnection();

    const [results] = await connection.query("SELECT * FROM movies");

    connection.end();

    if (results.length == 0) {
      throw new Error("Movies Not found");
    }

    return results;
  } catch (error) {
    throw error;
  }
};


module.exports = { getMovieModels }