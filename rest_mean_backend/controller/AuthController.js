const bcryptjs = require('bcryptjs')
const { json } = require('express')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const { validationResult } = require('express-validator')

const registerUser = async (req, res) => {
	const { email, password, username } = req.body

	try {
		let user = await User.findOne({ email })
		if (user) {
			return res.status(501).json({
				ok: false,
				message: 'email already registered',
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
					message: 'Successful registration',
					token,
				})
			},
		)
	} catch (error) {
		console.error(error)
		res.json({
			ok: false,
			message: 'Error registering',
		})
	}
}

const loginUser = async (req, res) => {
	const { email, password } = req.body
	let user = await User.findOne({ email })
	try {
		if (!user) {
			return res.status(401).json({
				ok: false,
				message: 'Invalid email or password',
			})
		}

		const validPassword = bcryptjs.compareSync(
			password,
			user.password,
		)

		if (!validPassword) {
			return res.status(401).json({
				ok: false,
				message: 'Invalid email or password',
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
					message: 'Success Login',
					token,
				})
			},
		)
	} catch (error) {
		console.error(error)
		res.json({
			ok: false,
			message: 'Error registering',
		})
	}
}

module.exports = {
	loginUser,
	registerUser,
}
