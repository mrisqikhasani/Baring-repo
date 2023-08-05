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

// put update movie
const updateMovieController = async(req, res, next) => {
  const movieId = req.params.id;
  const newData = req.body;

  try {
    const isUpdated = await moviesModels.updateMoviesModels(movieId, newData);

    if(!isUpdated) {
      return res.status(404).json({ message: "Movie not found or data unchanged"});
    }

    // if data update successfully, return success
    res.status(200).json({ message: 'Movie update Sucessfulyy'});

  } catch (error) {
    console.log('Error updating Movie:', error.message)
    res.status(500).json({ error: "Failed to update movie"})
  }
}

// Delete the movies
const deleteMovieController = async (req, res, next) => {
  movieId = request.params.id;

  try {
    const isDeleted = await moviesModels.deleteMoviesModels(movieId);

    if (!isDeleted) {
      return res.status(404).json({ message: 'Movie not found'});
    }

    res.status(200).json({ message: 'Movie deleted succesfully'})

  } catch (error){
    console.log("Error when delete", error.message);
    res.status(500).json({ error: "Failed to delete movie"})
  }
}

module.exports = {
  getMovieByIdController,
  getMovieController,
  postMovieController,
  updateMovieController,
  deleteMovieController
};
