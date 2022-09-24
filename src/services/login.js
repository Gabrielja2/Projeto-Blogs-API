const { User } = require('../models');
const generateToken = require('../utils/JWT');
const errorGenerate = require('../utils/errorGenerate');

const authenticate = async ({ email, password }) => {
  const user = await User.findOne({
    attributes: ['displayName', 'email'],
    where: { email, password },
  });

  if (!user) {
    throw errorGenerate('Invalid fields', 400);
  }

  const token = generateToken(user.dataValues);
  return { token };
}; 

module.exports = {
  authenticate,
};