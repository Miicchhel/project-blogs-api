const express = require('express');
const {
  getAllPosts,
} = require('../controllers/post.controller');
// const userMiddleware = require('../middlewares/user.middleware');
const authenticateToken = require('../middlewares/authenticateToken.middleware');

const routers = express.Router();

routers.get('/', authenticateToken, getAllPosts);

module.exports = routers;