const { Router } = require('express')
const {
	loginUser,
	registerUser,
} = require('../controller/authController')

const authRouter = Router()

authRouter.post('/register', registerUser)
module.exports = authRouter
