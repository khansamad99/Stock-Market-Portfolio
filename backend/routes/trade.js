const express = require('express')
const { addTransaction,fetchTransactions,fetchPortfolio } = require('../controllers/trade')
const router = express.Router()


router.post('/transactions',addTransaction)
router.get('/alltransactions',fetchTransactions)
router.get('/portfolio',fetchPortfolio)


module.exports = router
