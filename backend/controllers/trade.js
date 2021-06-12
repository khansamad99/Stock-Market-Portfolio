const express = require('express')
const portfolio = require('../data/portfolio')
const Transaction = require('../models/transaction')
const Portfolio = require('../models/portfolio')
const Stock = require('../models/stock')


exports.addTransaction = async(req,res) => {
    try {
        const {stockName,trade,quantity,price,currentPrice} = req.body
        if(trade==='buy'){
            const transaction = parseFloat((quantity*price)).toFixed(2)
            const details = {
                price,
                quantity,
                transaction
            }
            const newTransaction = new Transaction({ stockName, trade: 'buy', buy: details })
            await newTransaction.save()
            res.json({message:"Success"})
            const data = await Stock.find({stockName})
            if(data.length===0){
                const returns = (currentPrice-price)*quantity
                const newTrade = new Stock({ stockName,buyPrice:price,quantity,returns})
                console.log(newTrade)
                await newTrade.save()
            } 
            else{
                const updateStock = await Stock.findOne({stockName})
                let total = updateStock.quantity + quantity
                updateStock.buyPrice = ((price*quantity+updateStock.buyPrice*updateStock.quantity)/total).toFixed(2)
                updateStock.quantity = total
                updateStock.returns = ((updateStock.currentPrice - updateStock.buyPrice)*updateStock.quantity).toFixed(2)
                await updateStock.save()
                
            } 
        }
        else{
            const transaction = parseFloat((quantity*price)).toFixed(2)
            const details = {
                price,
                quantity,
                transaction
            }
            const newTransaction = new Transaction({ stockName, trade: 'sell', sell: details })
            await newTransaction.save()
            res.json({message:"Success"})
            const data = await Stock.find({stockName})
            if(data.length===0){
                const returns = (currentPrice-price)*quantity
                const newTrade = new Stock({ stockName,sellPrice:price,quantity})
                console.log(newTrade)
                await newTrade.save()
            } 
            else{
                const updateStock = await Stock.findOne({stockName})
                let total = updateStock.quantity - quantity
                if(total<0){
                   res.json({message:"No enough stocks to sell"})
                }
                updateStock.sellPrice = ((updateStock.sellPrice*updateStock.quantity+price*quantity)/total).toFixed(2)
                updateStock.quantity = total
                await updateStock.save()
                
            }
        } 
    } catch (error) {
        res.json({message:error.message})
    }
}

exports.fetchTransactions = async(req, res) => {
    const data = await Transaction.find({})
    res.json(data)
}

exports.fetchPortfolio = async(req, res) => {
    const data = await Stock.find({})
    res.json(data)
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
    await Stock.deleteMany(portfolio);
    console.log('Data imported');
}
