const express = require('express');
const { createSubCategory, getSubCategories, getSubCategoryById, updateSubCategory } = require('../controllers/subCategoryController');
const router = express.Router();

router.post('/subcategory', createSubCategory);
router.get('/subcategories', getSubCategories);
router.get('/subcategory/:id', getSubCategoryById);
router.put('/subcategory/:id', updateSubCategory);

module.exports = router;
