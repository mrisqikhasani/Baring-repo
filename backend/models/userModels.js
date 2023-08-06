const { createConnection } = require("../config/db.js");
const bcrypt = require("bcryptjs");
const Joi = require("joi");

const validateUser = (user) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    profilePic: Joi.string(),
    isAdmin: Joi.number(),
  });

  return schema.validate(user);
};

// get all the user
const getAllUsersModels = async () => {
  try {
    const connection = await createConnection();

    const [results] = await connection.query(
      "SELECT idusers, username, email, profilePic, isAdmin FROM users"
    );

    connection.end();

    if (results.length == 0) {
      throw error("Users not found");
    }

    return results;
  } catch (error) {
    throw error;
  }
};

// Register user
const createUserModels = async (userData) => {
  try {
    const { error } = validateUser(userData);
    if (error) throw new Error(error.details[0].message);

    const connection = await createConnection();

    // enkripsi password
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // query create by email and password
    const [results] = await connection.query(
      "INSERT INTO users(`username`, `email`, `password`) VALUES (?, ?, ?)",
      [userData.username, userData.email, hashedPassword]
    );

    connection.end();

    return {
      id: results.insertId,
      name: userData.username,
      email: userData.email,
    };
  } catch (error) {
    throw error;
  }
};

// Login user
const loginUserModels = async (userData) => {
  try {
    const connection = await createConnection();

    const [results] = await connection.query(
      "SELECT * FROM users WHERE email=?",
      [userData.email]
    );

    connection.end();

    // Check user
    if (results.length == 0) {
      throw new Error("User not found");
    }

    // compare the password with encryption
    const user = results[0];
    const isPasswordMatch = await bcrypt.compare(
      userData.password,
      user.password
    );

    if (!isPasswordMatch) {
      throw new Error("Invalid email or password");
    }

    // return data user if login sucessfulyy
    return {
      id: user.idusers,
      name: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    };
    // return results;
  } catch (error) {
    throw error;
  }
};

// Update user
const updateUserModels = async (userId, newData) => {
  try {
    const connection = await createConnection();

    // check is change in password or not
    if (newData.password) {
      // encryption new password
      const hashedPassword = await bcrypt.hash(newData.password, 10);
      newData.password = hashedPassword;
    }

    const [result] = await connection.query(
      "UPDATE users SET ? WHERE idUsers = ?",
      [newData, userId]
    );

    connection.end();

    return result.affectedRows > 0;
  } catch (error) {
    throw error;
  }
};

// Delete user
const deleteUserModels = async (userId) => {
  try {
    const connection = await createConnection();

    const [result] = await connection.query(
      "DELETE FROM users WHERE idusers = ?",
      [userId]
    );

    connection.end();

    return result.affectedRows > 0;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllUsersModels,
  createUserModels,
  loginUserModels,
  updateUserModels,
  deleteUserModels,
};
