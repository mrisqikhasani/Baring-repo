const { createConnection } = require("../db.js");
const bcrypt = require("bcryptjs");
const Joi = require("joi");

const validateUser = (user) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    profilePic: Joi.string(),
  });

  return schema.validate(user);
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
      throw new Error("Invalid email or password");
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
    return { name: user.username, email: user.email };
  } catch (error) {
    throw error;
  }
};

module.exports = { createUserModels, loginUserModels };
