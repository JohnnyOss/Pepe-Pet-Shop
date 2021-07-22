const express = require('express');
const router = express.Router();

const CategoryController = require('../controllers/categories.controller');

router.get('/category', CategoryController.getAll);
router.get('/category/:id', CategoryController.getId);

module.exports = router;
