const express = require('express');
const router = express.Router();
const { createUserController, getUser } = require("../controllers/userController.js")

// Get Home
router.get('/', (req, res, next) => {
    res.json("Hello this is backend Baring")
})

// router.get('/users', getUser)

// register
router.post('/register', createUserController)

// login
router.post("/login", )
module.exports = router;