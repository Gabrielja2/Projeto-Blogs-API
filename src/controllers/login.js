const loginService = require('../services/login');

const authenticate = async (req, res, next) => {
  try {
    const token = await loginService.authenticate(req.body);

     return res.status(200).json(token);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  authenticate,
};