const express = require('express')
const { addTransaction,fetchTransactions,fetchPortfolio,getReturns, deleteData,addStock, deleteTransaction } = require('../controllers/trade')
const router = express.Router()


router.post('/transactions',addTransaction)
router.get('/alltransactions',fetchTransactions)
router.get('/portfolio',fetchPortfolio)
router.get('/returns',getReturns)
router.delete('/delete',deleteData)
router.delete('/transaction/delete',deleteTransaction)
router.post('/addStocks',addStock)


module.exports = router
