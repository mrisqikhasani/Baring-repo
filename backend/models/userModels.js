const { createConnection } = require('../db.js');
const bcrypt = require('bcryptjs');
const Joi = require("joi");

const validateUser = (user) => {
    const schema = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        profilePic: Joi.string()
    });

    return schema.validate(user);
}

// Controler Register
const createUser = async (userData) => {
    try {
        const { error } = validateUser(userData);
        if (error) throw new Error(error.details[0].message);

        const connection = await createConnection();

        // enkripsi password
        const hashedPassword = await bcrypt.hash(userData.password, 10);

        // query create by email and password
        const [results] = await connection.query(
            'INSERT INTO users(`username`, `email`, `password`) VALUES (?, ?, ?)', [
                userData.username,
                userData.email,
                hashedPassword
            ]);

        connection.end();

        return {id: results.insertId, name: userData.username, email: userData.email};

    } catch (error){
        throw error;
    }
}

module.exports = { createUser }