const { insert } = require('../services/user.service');

const insertUser = async (req, res) => {
  const token = await insert(req.body);
  
  if (!token.type) return res.status(201).json({ token: token.message });
  
  return res.status(token.type).json({ message: token.message });
};

module.exports = {
  insertUser,
};