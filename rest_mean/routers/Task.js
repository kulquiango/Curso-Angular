const { Router } = require('express')
const { check } = require('express-validator')
const {
	createTask,
	readTask,
	updateTask,
	deleteTask,
} = require('../controller/TaskController')
const verifyToken = require('../middlewares/VerifyToken')
const validatorErrors = require('../middlewares/validationErrors')

const TaskRouter = new Router()

TaskRouter.post(
	'/create',
	[
		check('name', 'Name is required').not().isEmpty(),
		validatorErrors,
		verifyToken,
	],
	createTask,
)
TaskRouter.get('/read', [verifyToken], readTask)
TaskRouter.put(
	'/update/:id',
	[
		check('name', 'Name is required').not().isEmpty(),
		validatorErrors,
		verifyToken,
	],
	updateTask,
)
TaskRouter.delete('/delete/:id', [verifyToken], deleteTask)
module.exports = TaskRouter
