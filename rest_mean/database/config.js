const mongoose = require('mongoose')
require('dotenv').config()

const { PASSWORD_DATABASE } = process.env

const connectDatabase = async () => {
	try {
		await mongoose.connect(process.env.BD_CONNECTION)
		console.log('[INFO] Connected to Database Success')
	} catch (error) {
		console.error('Connected to Database failed:', error)
	}
}

module.exports = connectDatabase
