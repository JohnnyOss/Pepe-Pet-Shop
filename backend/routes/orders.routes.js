const express = require('express');
const router = express.Router();

const Order = require('../models/order.model');

router.get('/orders', async (req, res) => {
  try {
    const result = await Order
      .find()
      .select('firstName email id orderDate totalPrice')
      .sort({ orderDate: -1});
    if(!result) res.status(404).json({ apartment: 'Not found'});
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/orders/:id', async (req, res) => {
  try {
    const result = await Order.findById(req.params.id);
    if(!result) res.status(404).json({ order: 'Not found'});
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/orders', async (req, res) => {
  try {
    const { orderItems, firstName, lastName, email, phone, orderDate, totalPrice } = req.body;
    console.log('req.body', req.body);

    const newOrder = new Order({ orderItems, firstName, lastName, email, phone, orderDate, totalPrice });
    await newOrder.save();
    console.log('newOrder', newOrder);
    res.json(newOrder);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
