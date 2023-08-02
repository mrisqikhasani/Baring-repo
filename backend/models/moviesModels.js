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

// getMovieId
const getMovieByIdModels = async (movieId) => {
  try {
    const connection = await createConnection();

    const [results] = await connection.query(
      "SELECT * FROM movies WHERE movie_id = ?",
      [movieId]
    );

    connection.end();

    return results.length > 0 ? results[0] : null;
  } catch (error) {
    throw error;
  }
};

module.exports = { getMovieModels, getMovieByIdModels };
