const mongoose = require('mongoose')

const portfolioSchema = new mongoose.Schema({
    stocks:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Stock'
    }]
})

const portfolio = mongoose.model('Portfolio', portfolioSchema)
module.exports = portfolio