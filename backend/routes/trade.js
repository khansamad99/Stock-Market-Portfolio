const express = require('express')
const { addTransaction,fetchTransactions,fetchPortfolio,getReturns, deleteData,addStock } = require('../controllers/trade')
const router = express.Router()


router.post('/transactions',addTransaction)
router.get('/alltransactions',fetchTransactions)
router.get('/portfolio',fetchPortfolio)
router.get('/returns',getReturns)
router.get('/delete',deleteData)
router.post('/addStocks',addStock)


module.exports = router
