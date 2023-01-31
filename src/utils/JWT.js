require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const generateToken = (payload) =>
  jwt.sign(payload, JWT_SECRET, { expiresIn: '15m', algorithm: 'HS256' });

const authenticateToken = (token) => {
  try {
    const result = jwt.verify(token, JWT_SECRET);
    return { data: result };
  } catch (error) {
    return { message: error.message };
  }
};

module.exports = {
  generateToken,
  authenticateToken,
};