const express = require('express');
const router = express.Router();

const OrdersController = require('../controllers/orders.controller');

router.get('/orders', OrdersController.getAll);
router.get('/orders/:id', OrdersController.getId);
router.post('/orders', OrdersController.newOrder);

module.exports = router;
