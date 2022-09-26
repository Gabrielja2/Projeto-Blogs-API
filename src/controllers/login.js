const loginService = require('../services/login');
const { User } = require('../models');

const authenticate = async (req, res, next) => {
  try {
    const token = await loginService.authenticate(req.body);
    const { email, password } = req.body;
    
    const user = await User.findOne({
      attributes: ['id', 'displayName', 'email'],
      where: { email, password },
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
     return res.status(200).json(token);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  authenticate,
};