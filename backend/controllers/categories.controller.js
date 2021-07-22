const Category = require('../models/category.model');

exports.getAll = async (req, res) => {
  try {
    const result = await Category.find();
    if(!result) res.status(404).json({ product: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
};

exports.getId = async (req, res) => {
  try {
    const result = await Category
      .findById(req.params.id);
    if(!result) res.status(404).json({ product: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
};
