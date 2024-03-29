const userModel = require("../models/userModels.js");
const jwt = require("jsonwebtoken");

// show the all user
const getAllUsersContoller = async (req, res, next) => {
  try {
    const dataUser = await userModel.getAllUsersModels();

    if (!dataUser) {
      res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Getting sucessfully", dataUser });
  } catch (error) {
    console.log("Error when getting the user", error.message);
    res.status(500).json({});
  }
};

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
  const loginUser = req.body;
  try {
    const user = await userModel.loginUserModels(loginUser);

    const token = "Bearer " + jwt.sign(
        {
          id: user.id,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: 86400,
        }
      );

    res.status(200).json({ message: "Login is Successfully", token });
  } catch (error) {
    console.log("Error during login:", error.message);
    res.status(401).json({ error: error.message });
  }
};

// Update
const updateUserController = async (req, res, next) => {
  const { id } = req.params;
  const newData = req.body;
  try {
    const userUpdated = await userModel.updateUserModels(id, newData);

    if (!userUpdated) {
      return res.status(404).json({ message: "User not found" });
    }

    // if the movie update succesfully return sucess
    res.status(200).json({ message: "Update User sucessfully" });
  } catch (error) {
    console.log("eror when update", error.message);
    res.status(500).json({ message: "Error to update user" });
  }
};

// Delete user by admin
const deleteUserController = async (req, res, next) => {
  const { id } = req.params;
  try {
    const isDeleted = await userModel.deleteUserModels(id);

    if (!isDeleted) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted Sucessfully" });
  } catch (error) {
    console.log("Error when delete user", error.message);
    res.status(500).json({ error: "Failed the deleted user" });
  }
};

module.exports = {
  getAllUsersContoller,
  createUserController,
  loginUserController,
  updateUserController,
  deleteUserController,
};
