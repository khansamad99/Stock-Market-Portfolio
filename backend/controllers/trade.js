const express = require('express')
const portfolio = require('../data/portfolio')
const Transaction = require('../models/transaction')
const Stock = require('../models/stock')


exports.addTransaction = async(req,res) => {
    try {
        const {stockName,trade,currentPrice,quantity,returns} = req.body
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
            updateStock.returns = returns.toFixed(2)
            await updateStock.save()
            res.json({message:'Success'})
            
        } else{
            const transaction = parseFloat((quantity*currentPrice)).toFixed(2)
            const details = {
                price: parseFloat(currentPrice),
                quantity: parseInt(quantity),
                transaction
            }
            const newTransaction = new Transaction({ stockName, trade: 'sell', sell: details })
            await newTransaction.save()
            const updateStock = await Stock.findOne({stockName})
            let total = parseInt(updateStock.quantity) - parseInt(quantity)
            updateStock.currentPrice = currentPrice
            updateStock.sellPrice = ((currentPrice*quantity+updateStock.sellPrice*updateStock.quantity)/quantity).toFixed(2)
            updateStock.quantity = total
            updateStock.returns = returns.toFixed(2)
            await updateStock.save()
            res.json({message:'Success'})
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

exports.deleteData = async(req,res) => {
    await Transaction.deleteMany({})
    await Stock.deleteMany({})
    res.json({message:"Success"})
}
exports.getReturns = async(req, res) => {
    const sum = await Stock.aggregate([{
        $group:{
            _id: null,
            "Returns":{
                $sum:"$returns"
            }
        }
    }])
    res.json(sum)
}


exports.deleteTransaction = async(req, res) => {
    const { id } = req.params
    const data = await Transaction.findById(id)
    const stockName = data.stockName
    const tradeType = data.trade
    const stockData = await Stock.findOne({stockName})
    if(tradeType === 'buy'){
        let quantitydeleted = data.buy[0].quantity
        let avgBuy = parseFloat(stockData.buyPrice)
        let quantity = parseInt(stockData.quantity)
        let newBuyPrice = (avgBuy*quantity-(data.buy[0].price*quantitydeleted))/(quantity-quantitydeleted)
        stockData.buyPrice = newBuyPrice.toFixed(2)
        stockData.quantity = (quantity-quantitydeleted)
        await stockData.save()
    }
    else{
        let quantitydeleted = data.sell[0].quantity
        let avgSell = stockData.sellPrice
        let quantity = stockData.quantity
        let newSellPrice = (avgSell*quantity-data.sell[0].price)/(quantity-quantitydeleted)
        stockData.sellPrice = newSellPrice
        stockData.quantity = (quantity-quantitydeleted)
        await stockData.save()
    }
    await Transaction.findByIdAndRemove(id)
    res.json({message:"Transaction Deleted Stock updated"})
}


exports.deleteStock = async(req,res) => {
    const {id} = req.body
    await Stock.findByIdAndRemove(id)
    res.json({message:'Stock removed from Portfolio'})
}

