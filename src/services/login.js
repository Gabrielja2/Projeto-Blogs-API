const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const authenticate = async ({ email, password }) => {
  try {
    const user = await User.findOne({
      attributes: ['id', 'displayName', 'email'],
      where: { email, password },
    });

    const token = generateToken(user.dataValues);
    return { token };
  } catch (error) {
    console.log(error);
  }
}; 

module.exports = {
  authenticate,
};