const { insert, getAll } = require('../services/user.service');

const insertUser = async (req, res) => {
  const token = await insert(req.body);
  
  if (!token.type) return res.status(201).json({ token: token.message });
  
  return res.status(token.type).json({ message: token.message });
};

const getAllUsers = async (req, res) => {
  const users = await getAll();
  return res.status(200).json(users);
};

module.exports = {
  insertUser,
  getAllUsers,
};