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

    const emailPattern = new RegExp('^[a-zA-Z0-9][a-zA-Z0-9_.-]+@[a-zA-Z0-9][a-zA-Z0-9_.-]+.{1,3}[a-zA-Z]{2,4}');
    const phonePattern = new RegExp('[0-9]{6,13}');
    const emailMatched = (email.match(emailPattern) || []).join('');
    const phoneMatched = (phone.match(phonePattern) || []).join('');

    if((emailMatched.length < email.length) || (phoneMatched.length < phone.length)) {
      throw new Error('Wrong characters!');
    }

    if((emailMatched.length === email.length) && (phoneMatched.length === phone.length) && firstName.length > 2 && lastName.length > 2) {
      const newOrder = new Order({ orderItems, firstName, lastName, email, phone, orderDate, totalPrice });

      await newOrder.save();
      res.json(newOrder);
    } else {
      throw new Error('Wrong input!');
    }
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
