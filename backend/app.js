const express  = require('express')
const cors = require('cors')
const connectDB = require('./utils/db')
const trade = require('./routes/trade')

const dotenv = require('dotenv')
dotenv.config()

const app = express()
connectDB()


app.get('/',(req,res) => {
    res.send('Hllo')
})

app.use(cors())
app.use(express.json())
app.use('/api/stocks',trade)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is live on port ${PORT}`))