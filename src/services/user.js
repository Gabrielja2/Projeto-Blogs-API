const { User } = require('../models');

const generateToken = require('../utils/JWT');

const createNewUser = async ({ displayName, email, password, image }) => {
  try {
      const newUser = await User.create({ displayName, email, password, image });
      const token = generateToken(newUser.dataValues);
      return { token };
  } catch (error) {
    console.log(error);
  }  
};

module.exports = {
  createNewUser,
};