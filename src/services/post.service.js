const { BlogPost, User, Category } = require('../models');

const findAll = async () => BlogPost.findAll({
  attributes: { exclude: ['user_id'] },
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
});

module.exports = {
  findAll,
};