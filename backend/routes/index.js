const express = require("express");
const router = express.Router()
const usersRoutes = require('./usersRoutes');
const moviesRoutes = require('./moviesRoutes');

// Get Home
router.get("/", (req, res, next) => {
  res.json("Hello this is backend Baring");
});

// router user
router.use('/api', usersRoutes);

// router movies
router.use('/api', moviesRoutes);


module.exports = router;
