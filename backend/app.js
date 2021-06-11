const express  = require('express')
const connectDB = require('./utils/db')

const dotenv = require('dotenv')
dotenv.config()

const app = express()

connectDB()

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is live on port ${PORT}`))