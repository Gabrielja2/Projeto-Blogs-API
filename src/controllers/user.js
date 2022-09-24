const userService = require('../services/user');
const { User } = require('../models');

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

module.exports = {
  create,
};
