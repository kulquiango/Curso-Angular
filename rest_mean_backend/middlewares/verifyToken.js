const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
	const token = req.header('x-auth-token')
	if (!token) {
		return res.status(401).json({
			ok: false,
			message: 'Invalid Token',
		})
	}

	try {
		const payload = jwt.verify(token, process.env.SECRET)
		req.uid = payload.id
		next()
	} catch (error) {
		return res.status(401).json({
			ok: false,
			message: 'Invalid Token',
		})
	}
}

module.exports = verifyToken
