const Product = require('../models/product.model');

exports.getAll = async (req, res) => {
  try {
    const result = await Product.find();
    if(!result) res.status(404).json({ product: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
};

exports.getId = async (req, res) => {
  try {
    const result = await Product
      .findById(req.params.id);
    if(!result) res.status(404).json({ product: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
};

exports.getByCategory = async (req, res) => {
  try {
    const byCategory = await Product.find({ category: req.params.category });
    if(!byCategory) res.status(404).json({ product: 'Not found'});
    else res.json(byCategory);
  }
  catch(err) {
    res.status(500).json(err);
  }
};

exports.getByCategoryProduct = async (req, res) => {
  try {
    const byCategory = await Product.find({ category: req.params.category });
    const byCategoryProduct = await Product.findById(req.params.id);
    if(!byCategory) res.status(404).json({ product: 'Not found'});
    else res.json(byCategoryProduct);
  }
  catch(err) {
    res.status(500).json(err);
  }
};
