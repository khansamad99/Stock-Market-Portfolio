const express = require('express')
const { addTransaction,fetchTransactions,fetchPortfolio,getReturn } = require('../controllers/trade')
const router = express.Router()


router.post('/transactions',addTransaction)
router.get('/alltransactions',fetchTransactions)
router.get('/portfolio',fetchPortfolio)
router.get('/returns',getReturn)


module.exports = router
