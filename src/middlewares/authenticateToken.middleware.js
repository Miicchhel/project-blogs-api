const { authenticateToken } = require('../utils/JWT');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  const { data, message } = authenticateToken(token);
  
  if (message) return res.status(401).json({ message: 'Expired or invalid token' });

  req.user = data;

  return next();
};