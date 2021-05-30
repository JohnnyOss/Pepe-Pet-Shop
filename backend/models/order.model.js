const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderItems: { type: Array, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  orderDate: { type: String, required: true },
});

module.exports = mongoose.model('Order', orderSchema);
