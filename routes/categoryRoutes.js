const express = require('express');
const { createCategory, getCategories, getCategoryById, updateCategory } = require('../controllers/categoryController');
const router = express.Router();

router.post('/category', createCategory);
router.get('/categories', getCategories);
router.get('/category/:id', getCategoryById);
router.put('/category/:id', updateCategory);

module.exports = router;
