const { Router } = require('express')
const { check } = require('express-validator')
const validatorErrors = require('../middlewares/validationErrors')
const {
	loginUser,
	registerUser,
} = require('../controller/AuthController')

//Router used for "get","post" methods, etc.
const AuthRouter = Router()

AuthRouter.post(
	'/register',
	[
		check('email', 'Invalid email format').isEmail(),
		check('password', 'minimum 6 characters required').isLength({
			min: 6,
		}),
		check('username', 'username is required').not().isEmpty(),
		validatorErrors,
	],
	registerUser,
)
AuthRouter.post(
	'/login',
	[
		check('email', 'Invalid email format').isEmail(),
		check('password', 'minimum 6 characters required').isLength({
			min: 6,
		}),
		validatorErrors,
	],
	loginUser,
)
module.exports = AuthRouter
