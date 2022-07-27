const bcryptjs = require('bcryptjs')
const { json } = require('express')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const { validationResult } = require('express-validator')

const registerUser = async (req, res) => {
	/* Inicio express-validator*/
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(501).json({
			ok: false,
			errors: errors.mapped(),
		})
	}
	/* Fin express-validator*/
	const { email, password, username } = req.body

	try {
		let user = await User.findOne({ email })
		if (user) {
			return res.status(501).json({
				ok: false,
				messenger: 'email already registered',
			})
		}

		const newUser = new User({ email, password, username })
		//encrypt password
		const salt = bcryptjs.genSaltSync(12)
		newUser.password = bcryptjs.hashSync(password, salt)

		await newUser.save()

		const payload = {
			id: newUser.id,
		}

		jwt.sign(
			payload,
			process.env.SECRET,
			{ expiresIn: 3600 },
			(error, token) => {
				return res.json({
					ok: true,
					id: newUser.id,
					username,
					messenger: 'Successful registration',
					token,
				})
			},
		)
	} catch (error) {
		console.error(error)
		res.json({
			ok: false,
			messenger: 'Error registering',
		})
	}
}

const loginUser = async (req, res) => {
	/* Inicio express-validator*/
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(501).json({
			ok: false,
			errors: errors.mapped(),
		})
	}
	/* Fin express-validator*/
	const { email, password } = req.body
	let user = await User.findOne({ email })
	try {
		if (!user) {
			return res.status(401).json({
				ok: false,
				messenger: 'Invalid email or password',
			})
		}

		const validPassword = bcryptjs.compareSync(
			password,
			user.password,
		)

		if (!validPassword) {
			return res.status(401).json({
				ok: false,
				messenger: 'Invalid email or password',
			})
		}

		const payload = {
			id: user.id,
		}

		jwt.sign(
			payload,
			process.env.SECRET,
			{ expiresIn: 3600 },
			(error, token) => {
				return res.json({
					ok: true,
					id: user.id,
					username: user.username,
					messenger: 'Successful Login',
					token,
				})
			},
		)
	} catch (error) {
		console.error(error)
		res.json({
			ok: false,
			messenger: 'Error registering',
		})
	}
}

module.exports = {
	loginUser,
	registerUser,
}
