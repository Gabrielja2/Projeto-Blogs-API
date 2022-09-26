const { postSchema } = require('../utils/schemas');
const errorGenerate = require('../utils/errorGenerate');

const postMiddleware = async (req, res, next) => {
    const { error } = postSchema.validate(req.body);

    const { categoryIds, title, content } = req.body;

    if (!categoryIds || !title || !content) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    if (error) {
      next(errorGenerate(error.message, 400));
    }

    next();  
};

module.exports = {
  postMiddleware,
};