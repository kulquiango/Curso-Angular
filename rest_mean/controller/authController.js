const bcryptjs = require('bcryptjs')
const User = require('../models/user')

const loginUser = (req, res) => {
	res.send('Auth Controller')
}

const registerUser = async (req, res) => {
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
		res.json({
			ok: true,
			id: newUser.id,
			email,
			username,
			messenger: 'Successful registration',
		})
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
