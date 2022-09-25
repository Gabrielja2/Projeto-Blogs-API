const { userSchema } = require('../utils/schemas');
const errorGenerate = require('../utils/errorGenerate');

const userMiddleware = async (req, _res, next) => {
    const { error } = userSchema.validate(req.body);

    if (error) {
      next(errorGenerate(error.message, 400));
    }

    next();  
};

module.exports = {
  userMiddleware,
};