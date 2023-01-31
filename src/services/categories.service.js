const { Category } = require('../models');

const getAll = async () => Category.findAll();

const insert = async (name) => {
  const newCategory = await Category.create({ name });

  return { type: null, data: newCategory.dataValues };
};

module.exports = {
  getAll,
  insert,
};