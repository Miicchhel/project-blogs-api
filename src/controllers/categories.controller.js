const { getAll, insert } = require('../services/categories.service');

const getAllCategories = async (req, res) => {
  const categories = await getAll();
  return res.status(200).json(categories);
};

const insertCategory = async (req, res) => {
  const { name } = req.body;
  const { data, type } = await insert(name);
  if (!type) return res.status(201).json(data);
};

module.exports = {
  getAllCategories,
  insertCategory,
};