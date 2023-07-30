const express = require('express');
const router = express.Router();
const { createUser, getUser } = require("../controllers/user.js")

// Get Home
router.get('/', (req, res, next) => {
    res.json("Hello this is backend Baring")
})

router.get('/users', getUser)

router.post('/users', createUser)

module.exports = router;