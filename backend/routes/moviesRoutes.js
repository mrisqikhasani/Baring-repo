const express = require("express");
const router = express.Router();
const verify = require('../config/verifyToken.js')

const {
    getMovieController,
    getMovieByIdController,
    postMovieController,
    updateMovieController,
    deleteMovieController,
    searchMovieByQueryController,
  } = require("../controllers/movieController.js");

// get movies
router.get("/movies", verify.verifyToken, getMovieController);

// search by query
router.get("/movies/search", verify.verifyToken, searchMovieByQueryController)

// get movies by id
router.get("/movies/:id", verify.verifyToken, getMovieByIdController);

// post the movies
router.post("/movies", [verify.verifyToken, verify.verifyisAdmin], postMovieController);

// put update the movies
router.put("/movies/:id", [verify.verifyToken, verify.verifyisAdmin], updateMovieController);

// delete the movies
router.delete("/movies/:id", [verify.verifyToken, verify.verifyisAdmin], deleteMovieController)

module.exports = router;

