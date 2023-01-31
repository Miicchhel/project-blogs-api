require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const generateToken = (payload) =>
  jwt.sign(payload, JWT_SECRET, { expiresIn: '15m', algorithm: 'HS256' });

module.exports = {
  generateToken,
};