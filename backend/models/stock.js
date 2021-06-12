const mongoose = require('mongoose')

const details = {
    price:{
        type:Number
    },
    quantity:{
        type:Number
    },
    transaction:{
        type:Number
    }
}

const stockSchema = {
    name:{
        type:String
    },
    trade:{
        type:String
    },
    buy:[details],
    sell:[details]
}

const stock = mongoose.model('Stock', stockSchema)
module.exports = stock