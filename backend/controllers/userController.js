
const createConnection = require('../db.js')
const userModel = require("../models/userModels.js")

// REGISTER
const createUserController = async (req, res, next) => {
    
    try {
        userData = req.body

        const newUser = await userModel.createUser(userData);

        res.status(201).json({message: 'user Created succesfully', user: newUser})

    } catch(error) {
        console.log('Error creating data:', error.message);
        res.status(400).json({error: error.message})
    }
}

const getUser = async (req, res, next) => {
    try {
        const connection = await createConnection();

        const dataUser = await connection.query('SELECT * FROM users');
        connection.end()
        
        if(dataUser.length == 0) {
            res.status(404).json({message: 'user not found!'})
        }

        res.status(200).json({message: 'user found!', user: dataUser[0]})

    } catch(error) {
        console.log('Error creating data:', error.message);
        res.status(500).json({error: 'error in internal'})
    }
}

// Login 
const loginUser = async (req, res, next) => {
    try {
        const connection = await createConnection();

        const { email, password } = req.body;

        const [result] = await connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);

        connection.end();

        if(result.length == 0) {
            res.status(401).json({ message: 'User not found'}); 
        }

        res.status(200).json({message: 'Login Successful', user})
    
    } catch (error) {
        console.log("Error login user:", error.message);
        res.status(500).json({error: "error in internal"})
    }
}

module.exports = { createUserController, getUser }