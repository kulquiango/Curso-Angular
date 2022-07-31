//import external
const express = require('express')
const cors = require('cors')
//import KUG-proyecy
const connectDatabase = require('./database/config')
const TaskRouter = require('./routers/Task')
const AuthRouter = require('./routers/Auth')
//Variables de configuracion
require('dotenv').config()

//conection database
connectDatabase()

const app = express()
app.use(express.json())
app.use(cors())

app.use('/auth', AuthRouter)
app.use('/task', TaskRouter)

app.use('*', express.static(__dirname + '/public'))

app.listen(process.env.PORT, () => {
	console.info(
		`[INFO] Application running in port ${process.env.PORT}`,
	)
})
