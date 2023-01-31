const { Category } = require('../models');

const getAll = async () => Category.findAll();

module.exports = {
  getAll,
};