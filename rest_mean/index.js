const express = require('express')
const connectDatabase = require('./database/config')
const authRouter = require('./routers/auth')
require('dotenv').config()

connectDatabase()

const app = express()
app.use(express.json())
app.use('/auth', authRouter)
app.use('*', express.static(__dirname + '/public'))

app.listen(process.env.PORT, () => {
	console.log(`Application running in port ${process.env.PORT}`)
})
