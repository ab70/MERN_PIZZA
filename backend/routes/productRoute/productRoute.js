const express = require('express')
const router = express.Router()

//import controllers
const productControllers = require('../../app/controllers/productControllers')

router.get('/products', productControllers().allProducts)
router.post('/products', productControllers().postProduct)
router.put('/products/:id', productControllers().updateProduct).delete(productControllers().deleteProduct)


module.exports = router