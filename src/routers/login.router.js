const express = require('express');
const { auth } = require('../controllers/auth.controller');
const loginMiddleware = require('../middlewares/login.middleware');

const routers = express.Router();

routers.post(
  '/',
  loginMiddleware,
  auth,
);

module.exports = routers;