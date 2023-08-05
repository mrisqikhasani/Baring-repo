const moviesModels = require("../models/moviesModels.js");

// get movie all
const getMovieController = async (req, res, next) => {
  try {
    const movie = await moviesModels.getMovieModels();

    res.status(200).json({ message: "Get Movies Succesfully", movie });
  } catch (error) {
    console.log("Error getting movies", error.message);
    res.status(404).json({ error: error.message });
  }
};

// get movie by id controller
const getMovieByIdController = async (req, res, next) => {
  try {
    const movieId = req.params.id;

    const movie = await moviesModels.getMovieByIdModels(movieId);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    // if the movie found
    res.status(200).json(movie);
  } catch (error) {
    console.log("Error getting movies", error.message);
    res.status(404).json({ error: error.message });
  }
};

// post the movie
const postMovieController = async (req, res, next) => {
  try {
    dataMovie = req.body;

    const movie = await moviesModels.postMovieModels(dataMovie);

    res.status(201).json({ message: "The movie created", data: movie });
  } catch (error) {
    console.log("Error post Movie", error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getMovieController,
  getMovieByIdController,
  postMovieController,
};
