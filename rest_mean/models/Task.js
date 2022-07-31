const { Schema, model } = require('mongoose')

const task = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	creator: {
		type: Schema.Types.ObjectId,
		trim: true,
		ref: 'User',
	},
	createAt: {
		type: Date,
		default: Date.now(),
	},
})

module.exports = model('Task', task)
