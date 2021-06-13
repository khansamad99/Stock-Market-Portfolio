const mongoose = require('mongoose')

const stockSchema = {
    stockName:{
        type:String,
        required:true
    },
    currentPrice:{
        type:Number,
        required:true
    },
    buyPrice:{
        type:Number,
        default:0
    },
    sellPrice:{
        type:Number,
        default:0
    },
    quantity:{
        type:Number,
        required:true,
        default:0
    },
    returns:{
        type:Number,
        default:0
    }
}

const stock = mongoose.model('Stock', stockSchema)
module.exports = stock