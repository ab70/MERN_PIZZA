const express = require('express')
const router = express.Router()


const userControllers = require('../../app/controllers/userControllers')

router.post('/register', userControllers().registerUser)
router.post('/login', userControllers().userLogin)



module.exports = router