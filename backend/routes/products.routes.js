const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/products.controller');

router.get('/products', ProductController.getAll);
router.get('/products/:id', ProductController.getId);
router.get('/products/category/:category', ProductController.getByCategory);
router.get('/products/category/:category/:id', ProductController.getByCategoryProduct);

module.exports = router;
