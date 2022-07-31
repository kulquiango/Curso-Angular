const Task = require('../models/Task')

const createTask = async (req, res) => {
	const { name } = req.body
	const id = req.uid
	const newTask = new Task({ name, creator: id })

	await newTask.save()

	res.status(200).json({
		ok: true,
		newTask,
		message: 'Task created successfully',
	})
}

const readTask = async (req, res) => {
	const id = req.uid
	try {
		const tareas = await Task.find({ creator: id }).sort({
			createAt: -1,
		})
		return res.json({
			ok: true,
			tareas,
		})
	} catch (error) {
		return res.status(404).json({
			ok: false,
			message: 'Tasks not found',
		})
	}
}

const updateTask = async (req, res) => {
	const { id } = req.params
	const { name } = req.body
	try {
		const tarea = await Task.findByIdAndUpdate(
			id,
			{ name },
			{ new: true },
		)
		return res.json({
			ok: true,
			message: 'Task Updated',
			tarea,
		})
	} catch (error) {
		return res.status(404).json({
			ok: false,
			message: 'Task not Updated',
		})
	}
}

const deleteTask = async (req, res) => {
	const { id } = req.params
	try {
		const tarea = await Task.findByIdAndRemove(id)
		return res.json({
			ok: true,
			message: 'Task Deleted',
			tarea,
		})
	} catch (error) {
		return res.status(404).json({
			ok: false,
			message: 'Task not Deleted',
		})
	}
}
module.exports = { createTask, readTask, updateTask, deleteTask }
