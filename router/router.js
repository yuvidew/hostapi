const express = require('express')
const { Product, allProducts, filterByQuery } = require('../controller/getProducts')
const addProduct = require('../controller/postProduct')
const router = express.Router()

router.get('/products' , allProducts)

router.get('/products/:id' , Product)

router.get('/product' , filterByQuery)

router.post('/add/product' , addProduct)

module.exports = router
