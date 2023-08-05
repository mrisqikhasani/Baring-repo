const express = require('express');
const router = express.Router();
const { createUserController, loginUserController } = require("../controllers/userController.js")
const { getMovieController, getMovieByIdController, postMovieController } = require("../controllers/movieController.js")

// Get Home
router.get('/', (req, res, next) => {
    res.json("Hello this is backend Baring")
})

// register
router.post('/register', createUserController);

// login
router.post("/login", loginUserController);

// get movies 
router.get('/movies', getMovieController);

// get movies by id
router.get('/movies/:id', getMovieByIdController);

// post the movies
router.post('/movies', postMovieController);

module.exports = router;
