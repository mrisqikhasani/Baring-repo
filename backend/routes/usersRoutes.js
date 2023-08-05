const express = require("express");
const router = express.Router();
const {
  createUserController,
  loginUserController,
} = require("../controllers/userController.js");

// register
router.post("/register", createUserController);

// login
router.post("/login", loginUserController);

module.exports = router;
