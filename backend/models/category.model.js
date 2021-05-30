const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: Object, required: true },
});

module.exports = mongoose.model('Category', categorySchema);
