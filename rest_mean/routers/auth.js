const { Router } = require('express')
const { check } = require('express-validator')
const {
	loginUser,
	registerUser,
} = require('../controller/authController')

//Router used for "get","post" methods, etc.
const authRouter = Router()

authRouter.post(
	'/register',
	[
		check('email', 'Invalid email format').isEmail(),
		check('password', 'minimum 6 characters required').isLength({
			min: 6,
		}),
		check('username', 'username is required').not().isEmpty(),
	],
	registerUser,
)
authRouter.post(
	'/login',
	[
		check('email', 'Invalid email format').isEmail(),
		check('password', 'minimum 6 characters required').isLength({
			min: 6,
		}),
	],
	loginUser,
)
module.exports = authRouter
