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
    const user = await authenticateToken(token);

  if (!user) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

    const users = await userService.findAllUsers();    
    
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getUsers,
};
