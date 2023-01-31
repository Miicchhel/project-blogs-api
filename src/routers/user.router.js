const express = require('express');
const {
  insertUser,
  getAllUsers,
  getAllById,
} = require('../controllers/user.controller');
const userMiddleware = require('../middlewares/user.middleware');
const authenticateToken = require('../middlewares/authenticateToken.middleware');

const routers = express.Router();

routers.post('/', userMiddleware, insertUser);
routers.get('/', authenticateToken, getAllUsers);
routers.get('/:id', authenticateToken, getAllById);

module.exports = routers;