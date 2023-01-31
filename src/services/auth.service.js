const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const authenticate = async ({ email, password }) => {
  const usuario = await User.findOne({ where: { email, password } });
  
  if (!usuario) return { type: 400, message: 'Invalid fields' };

  const token = generateToken(usuario.dataValues);
  return { type: null, message: token };
};

module.exports = {
  authenticate,
};