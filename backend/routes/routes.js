const express = require('express');
const router = express.Router();
const { createUserController, loginUserController } = require("../controllers/userController.js")
const { getMovieController } = require("../controllers/movieController.js")

// Get Home
router.get('/', (req, res, next) => {
    res.json("Hello this is backend Baring")
})

// router.get('/users', getUser)

// register
router.post('/register', createUserController);

// login
router.post("/login", loginUserController);

// get movies 
router.get('/movies', getMovieController);

module.exports = router;