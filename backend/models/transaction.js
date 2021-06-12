const mongoose = require('mongoose')

const details = {
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    transaction:{
        type:Number,
        required:true
    }
}

const transactSchema = {
    stockName:{
        type:String,
        required:true
    },
    trade:{
        type:String,
        required:true
    },
    buy:[details],
    sell:[details]
}

const transaction = mongoose.model('Transaction', transactSchema)
module.exports = transaction