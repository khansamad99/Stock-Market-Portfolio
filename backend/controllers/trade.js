const express = require('express')
const portfolio = require('../data/portfolio')
const Transaction = require('../models/transaction')
const Stock = require('../models/stock')


exports.addTransaction = async(req,res) => {
    try {
        const {stockName,trade,currentPrice,quantity} = req.body
        console.log(stockName, trade, currentPrice, quantity)
        if(trade==='buy'){
            const transaction = parseFloat((quantity*currentPrice)).toFixed(2)
            const details = {
                price: parseFloat(currentPrice),
                quantity: parseInt(quantity),
                transaction
            }
            const newTransaction = new Transaction({ stockName, trade: 'buy', buy: details })
            await newTransaction.save()
            const updateStock = await Stock.findOne({stockName})
            let total = parseInt(updateStock.quantity) + parseInt(quantity)
            updateStock.currentPrice = currentPrice
            updateStock.buyPrice = ((currentPrice*quantity+updateStock.buyPrice*updateStock.quantity)/total).toFixed(2)
            updateStock.quantity = total
            updateStock.returns = ((updateStock.currentPrice - updateStock.buyPrice)*updateStock.quantity).toFixed(2)
            await updateStock.save()
            res.json({message:'Success'})
            
        } else{
            console.log('here')
            const transaction = parseFloat((quantity*currentPrice)).toFixed(2)
            console.log(stockName, trade, currentPrice,quantity)
            const details = {
                price: parseFloat(currentPrice),
                quantity: parseInt(quantity),
                transaction
            }
            const newTransaction = new Transaction({ stockName, trade: 'sell', sell: details })
            console.log(newTransaction)
            await newTransaction.save()
            const updateStock = await Stock.findOne({stockName})
            console.log(updateStock)
            let total = parseInt(updateStock.quantity) - parseInt(quantity)
            updateStock.currentPrice = currentPrice
            updateStock.sellPrice = ((currentPrice*quantity+updateStock.sellPrice*updateStock.quantity)/total).toFixed(2)
            updateStock.quantity = total
            updateStock.returns = ((updateStock.currentPrice - updateStock.buyPrice)*updateStock.quantity).toFixed(2)
            await updateStock.save()
        }
    } catch (error) {
        res.json({message:error.message})
    }
}

exports.fetchTransactions = async(req, res) => {
    const data = await Transaction.find({}).sort({date:-1})
    res.json(data)
}

exports.fetchPortfolio = async(req, res) => {
    const data = await Stock.find({})
    res.json(data)
}

exports.addStock = async(req, res) => {
    await Stock.insertMany(portfolio)
    res.json({message:"Success"})
}
exports.deleteTransactions = async(req, res) => {
    const {id:_id} = req.params.id
    const data = await Stock.findByIdAndRemove(id)
}

exports.getReturn = async(req, res) => {
    const data = await Stock.find({})
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
    await Transaction.deleteMany({})
    await Stock.deleteMany({})
}