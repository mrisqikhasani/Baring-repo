const { createConnection } = require("../config/db.js");

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

// get movie with limit and pages
const getMoviesWithLimit = async (offset, limit) => {
  try {
    const connection = await createConnection();

    const [ results ] = await connection.query('SELECT * FROM movies LIMIT ?, ?', 
    [offset, limit]);

    return results;

  } catch (error) {
    throw error;
  }
}

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
// create post movie

const postMovieModels = async (dataMovie) => {
  try {
    const connection = await createConnection();

    const [results] = await connection.query(
      `INSERT INTO movies VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        dataMovie.movie_id,
        dataMovie.movie_title,
        dataMovie.img,
        dataMovie.img_title,
        dataMovie.imgsm,
        dataMovie.desc,
        dataMovie.trailer,
        dataMovie.video,
        dataMovie.year,
        dataMovie.limit,
        dataMovie.genre,
        dataMovie.isSeries,
      ]
    );

    connection.end();

    return {
      movie_id: dataMovie.movie_id,
      movie_title: dataMovie.movie_title,
      img: dataMovie.img,
    };
  } catch (error) {
    throw error;
  }
};

// put update movies
const updateMoviesModels = async (movieId, newData) => {
  try {
    const connection = await createConnection();

    const [result] = await connection.query(
      "UPDATE movies SET ? WHERE movie_id = ?",
      [newData, movieId]
    );

    connection.end();

    return result.affectedRows > 0;
  } catch (error) {
    throw error;
  }
};

// Delete the movies
const deleteMoviesModels = async(movieId) => {
  try {
    const connection = await createConnection();

    const [ result ] = await connection.query("DELETE FROM movies WHERE movie_id = ?",
    [movieId])

    connection.end();

    return result.affectedRows > 0;

  } catch(error) {
    throw error;
  }
}

module.exports = {
  getMovieModels,
  getMoviesWithLimit,
  getMovieByIdModels,
  postMovieModels,
  updateMoviesModels,
  deleteMoviesModels
};
