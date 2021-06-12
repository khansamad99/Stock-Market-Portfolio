const express = require('express')
const portfolio = require('../data/portfolio')
const Stock = require('../models/stock')
const Portfolio = require('../models/portfolio')



exports.fetchStocks = async(req,res) => {
    const data =await Stock.find({})
    res.json(data);
}

exports.addTransaction = async(req,res) => {
    const {stockName,trade,quantity,price} = req.body
    if(trade==='Buy'){
        const transaction = parseFloat((quantity*price)).toFixed(2)
        const details = {
            price,
            quantity,
            transaction
        }
        const newTrade = new Stock({ stockName, trade: 'buy', buy: detail })
        await Stock.save()
        Portfolio.stocks = [...Portfolio.stocks,newTrade._id]
    }
    else{
        const transaction = parseFloat((quantity*price)).toFixed(2)
        const details = {
            price,
            quantity,
            transaction
        }
        const newTrade = new Stock({ stockName, trade: 'sell', sell: detail })
        await Stock.save()
        Portfolio.stocks = [...Portfolio.stocks,newTrade._id] 
    }
   
}

exports.updateStock = async(req,res) => {
    const {id:_id} = req.params.id
    const stock = req.body

    const updatedStock = await Stock.findByIdAndUpdate(_id,{...stock,_id},{new:true})
    res.json(updatedStock)
}

exports.deleteStock = async(req,res) => {
    const {id:_id} = req.params.id
    await Stock.findByIdAndRemove(id)
    res.json({message:'Stock removed from Portfolio'})
}


exports.deleteData = async(req,res) => {
    await Stock.deleteMany(portfolio);
    console.log('Data imported');
}
