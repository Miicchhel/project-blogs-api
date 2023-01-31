const express = require('express');

const {
  getAllCategories,
  insertCategory,
} = require('../controllers/categories.controller');

const authenticateToken = require('../middlewares/authenticateToken.middleware');
const categoriesMiddleware = require('../middlewares/categories.middleware');

const routers = express.Router();

routers.post('/', categoriesMiddleware, authenticateToken, insertCategory);
routers.get('/', authenticateToken, getAllCategories);

module.exports = routers;