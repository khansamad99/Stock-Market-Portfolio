const express = require('express')
const { addTransaction,deleteData,fetchStocks } = require('../controllers/trade')
const router = express.Router()


router.get('/deleteData',deleteData)
router.post('/transactions',addTransaction)
router.get('/portfolio',fetchStocks)

module.exports = router
