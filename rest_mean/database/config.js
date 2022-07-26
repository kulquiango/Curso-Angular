const mongoose = require('mongoose')
require('dotenv').config()

const { PASSWORD_DATABASE } = process.env

const connectDatabase = async () => {
	try {
		await mongoose.connect(
			`mongodb+srv://kulquiango:${PASSWORD_DATABASE}@cluster0.l5ws8oj.mongodb.net/crud?retryWrites=true&w=majority`,
		)
		console.log('Connected to Database Success')
	} catch (error) {
		console.error('Connected to Database failed:', error)
	}
}

module.exports = connectDatabase
