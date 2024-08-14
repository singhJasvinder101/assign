const express = require('express');
const { createItem, getItems, getItemById, updateItem, searchItems } = require('../controllers/itemController');
const router = express.Router();

router.post('/item', createItem);
router.get('/items', getItems);
router.get('/item/:id', getItemById);
router.put('/item/:id', updateItem);
router.get('/items/search', searchItems);

module.exports = router;
