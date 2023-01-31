const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const insert = async ({ displayName, email, password, image }) => {
  const oldUser = await User.findOne({ where: { email } });

  if (oldUser) return { type: 409, message: 'User already registered' };

  await User.create({ displayName, email, password, image });

  const newUser = await User.findOne({ where: { email, password } });

  const token = generateToken(newUser.dataValues);
  return { type: null, message: token };
};

const getAll = async () => User.findAll({ attributes: { exclude: ['password'] } });

const getById = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  
  if (!user) return { type: 404, message: 'User does not exist' };
  
  return { type: null, message: user };
};

module.exports = {
  insert,
  getAll,
  getById,
};