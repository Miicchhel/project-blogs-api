const express = require('express');

const {
  getAllCategories,
} = require('../controllers/categories.controller');

const authenticateToken = require('../middlewares/authenticateToken.middleware');

const routers = express.Router();

// routers.post('/', authenticateToken, );
routers.get('/', authenticateToken, getAllCategories);

module.exports = routers;