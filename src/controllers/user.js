const userService = require('../services/user');
const { User } = require('../models');
const { authenticateToken } = require('../utils/JWT');

const create = async (req, res, next) => {
  try {
    const { email } = req.body;
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(409).json({ message: 'User already registered' });      
    }
    const token = await userService.createNewUser(req.body);
     return res.status(201).json(token); 
  } catch (error) {
    next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    await authenticateToken(token);

    const users = await userService.findAllUsers();    
    
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    await authenticateToken(token);
    
    const { id } = req.params;

    const isValidId = await User.findOne({ where: { id } });

    if (!isValidId) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    const user = await userService.findById(id);

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const userId = await authenticateToken(token);
    
    console.log('userId', userId.id);
    await userService.deleteUser(userId.id);

    res.status(204).json();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getUsers,
  getUserById,
  deleteUser,
};
