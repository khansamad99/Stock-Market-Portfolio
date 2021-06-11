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

const stockSchema = {
    name:{
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

const stock = mongoose.model('Stock', stockSchema)
module.exports = stock