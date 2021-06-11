const express = require('express')
const Stock = require('../models/stock')

exports.buyStock = async(req,res) => {
    const {stockName,quantity,buyPrice} = req.body
    const transaction = parseFloat((quantity*price)).toFixed(2)
    const details = {
        price:buyPrice,
        quantity,
        transaction
    }
}

exports.sellStock = async(req,res) => {
    const {stockName,quantity,buyPrice,sellPrice} = req.body
    const transaction = parseFloat((quantity*price)).toFixed(2)
    const details = {
        price:sellPrice,
        quantity,
        transaction
    }   
}

