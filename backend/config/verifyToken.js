const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { createConnection } = require("./db.js");

dotenv.config();

const verifyToken = (req, res, next) => {
  const tokenHeader = req.headers["x-access-token"];
  console.log(tokenHeader);

  if (tokenHeader.split(" ")[0] !== "Bearer") {
    return res.status(500).send({
      auth: false,
      message: "Error",
      errors: "Incorrect token format",
    });
  }

  let token = tokenHeader.split(" ")[1];

  if (!token) {
    return res.status(404).json({ message: "No token provided", auth: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

const verifyisAdmin = async (req, res, next) => {
  try {
    const { id } = req.user;

    const connection = await createConnection();

    const [results] = await connection.query(
      "SELECT * FROM users WHERE idusers = ? AND isAdmin = ?",
      [id, 1]
    );

    connection.end();

    if (results.length == 0) {
      return res.status(401).json({ message: "Kagak punya akses " });
    }

    next();

    return;
  } catch (error) {
    throw error;
  }
};

module.exports = { verifyToken, verifyisAdmin };
