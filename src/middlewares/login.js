const schema = require('../utils/schemas');
const errorGenerate = require('../utils/errorGenerate');

const authMiddleware = async (req, _res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    next(errorGenerate('Some required fields are missing', 400));
  }
    const { error } = schema.validate(req.body);
    if (error) {
      next(errorGenerate(error.message, 400));
    }

    next();  
};

module.exports = authMiddleware;