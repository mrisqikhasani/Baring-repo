const userModel = require("../models/userModels.js");

// REGISTER
const createUserController = async (req, res, next) => {
  try {
    userData = req.body;

    const newUser = await userModel.createUserModels(userData);

    res
      .status(201)
      .json({ message: "user Created succesfully", user: newUser });
  } catch (error) {
    console.log("Error creating data:", error.message);
    res.status(400).json({ error: error.message });
  }
};

// Login
const loginUserController = async (req, res, next) => {
  try {
    const loginUser = req.body;

    const user = await userModel.loginUserModels(loginUser);

    res.status(200).json({ message: "Login Successful", user });
  } catch (error) {
    console.log("Error during login:", error.message);
    res.status(401).json({ error: error.message });
  }
};

module.exports = { createUserController, loginUserController };
