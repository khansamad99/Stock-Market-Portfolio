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
        type:String,
        required:true
    },
    trade:{
        type:String,
        required:true
    },
    buyPrice:{
        type:Number,
        required:true
    },
    sellPrice:{
        type:Number,
        required:true
    },
    qunatity:{
        type:Number,
        required:true
    }
}

const stock = mongoose.model('Stock', stockSchema)
module.exports = stock