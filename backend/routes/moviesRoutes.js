const express = require("express");
const router = express.Router();

const {
    getMovieController,
    getMovieByIdController,
    postMovieController,
    updateMovieController,
  } = require("../controllers/movieController.js");

// get movies
router.get("/movies", getMovieController);

// get movies by id
router.get("/movies/:id", getMovieByIdController);

// post the movies
router.post("/movies", postMovieController);

// put update the movies
router.put("/movies/:id", updateMovieController);

module.exports = router;

