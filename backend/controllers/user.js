
const createConnection = require('../db.js')
const crypto = require("crypto")


const createUser = async (req, res, next) => {
    
    try {
        const algorithm = 'aes-256-cbc'
        const initVector = crypto.randomBytes(16)
        const Securitykey = crypto.randomBytes(32);
        const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
        const password = req.body.password;
        let passwordData = cipher.update(password, "utf-8", "hex")
        passwordData += cipher.final("hex");

        const connection = await createConnection();

        const values = [
            req.body.username,
            req.body.email,
            passwordData,
            req.body.profilePic
        ]

        const [result] = await connection.query(
            'INSERT INTO users(`username`, `email`, `password`, `profilePic`) VALUES (?)', [values]);
        
        connection.end()

        res.status(201).json({message: 'user Created', user: result[0]})

    } catch(error) {
        console.log('Error creating data:', error.message);
        res.status(500).json({error: 'error in internal'})
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

module.exports = { createUser, getUser }