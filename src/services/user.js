const { User } = require('../models');

const { generateToken } = require('../utils/JWT');

const createNewUser = async ({ displayName, email, password, image }) => {
  try {
      const newUser = await User.create({ displayName, email, password, image });
      const token = generateToken(newUser.dataValues);
      return { token };
  } catch (error) {
    console.log(error);
  }  
};

const findAllUsers = () => {
  try {
    const users = User.findAll({
      attributes: {
        exclude: ['password'],
      },
    });
    return users;
  } catch (error) {
    console.log(error);
  }
};

const findById = (id) => {
  try {
    const user = User.findOne({
      attributes: {
        exclude: ['password'],
      },
      where: { id },
    });
    return user;
  } catch (error) {
    console.log(error);
}
};

module.exports = {
  createNewUser,
  findAllUsers,
  findById,
};