const { findAll } = require('../services/post.service');

const getAllPosts = async (req, res) => {
  const posts = await findAll();
  return res.status(200).json(posts);
};

module.exports = {
  getAllPosts,
};