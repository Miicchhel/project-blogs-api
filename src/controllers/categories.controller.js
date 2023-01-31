const { getAll } = require('../services/categories.service');

const getAllCategories = async (req, res) => {
  const categories = await getAll();
  return res.status(200).json(categories);
};

module.exports = {
  getAllCategories,
};