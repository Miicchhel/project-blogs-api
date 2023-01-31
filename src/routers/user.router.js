const express = require('express');
const { insertUser } = require('../controllers/user.controller');
const userMiddleware = require('../middlewares/user.middleware');
const authenticateToken = require('../middlewares/authenticateToken.middleware');

const routers = express.Router();

routers.post(
  '/',
  userMiddleware,
  insertUser,
);

module.exports = routers;