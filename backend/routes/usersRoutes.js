const express = require("express");
const router = express.Router();
const verify = require("../config/verifyToken.js");

const {
  createUserController,
  loginUserController,
  updateUserController,
  deleteUserController,
  getAllUsersContoller,
} = require("../controllers/userController.js");

// get
router.get(
  "/users",
  [verify.verifyToken, verify.verifyisAdmin],
  getAllUsersContoller
);

// register
router.post("/register", createUserController);

// login
router.post("/login", loginUserController);

// update
router.put("/users/:id", updateUserController);

// delelte
router.delete("/users/:id", deleteUserController);

module.exports = router;
