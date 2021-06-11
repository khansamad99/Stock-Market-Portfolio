const mongoose = require('mongoose')

const connectDB = (dbName) => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }, () => {
            console.log('Database is running')
    })
}

module.exports = connectDB