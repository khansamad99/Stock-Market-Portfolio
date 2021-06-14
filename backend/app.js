const express  = require('express')
const path = require('path')
const cors = require('cors')
const connectDB = require('./utils/db')
const trade = require('./routes/trade')

const dotenv = require('dotenv')
dotenv.config()

const app = express()
connectDB()



app.use(cors())
app.use(express.json())
app.use('/api/stocks',trade)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'../frontend/build')))
    app.get('*', (req, res) =>
            res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else{
    app.get('/',(req,res) => {
        res.send('Hllo')
    })
    
}
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is live on port ${PORT}`))