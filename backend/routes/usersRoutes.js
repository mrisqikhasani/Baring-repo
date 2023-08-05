const express = require("express");
const router = express.Router();
const {
  createUserController,
  loginUserController,
  updateUserController,
  deleteUserController,
} = require("../controllers/userController.js");

// register
router.post("/register", createUserController);

// login
router.post("/login", loginUserController);

// update 
router.put("/users/:id", updateUserController);

// delelte
router.delete("/users/:id", deleteUserController)

module.exports = router;
