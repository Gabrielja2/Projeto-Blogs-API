const categoryService = require('../services/categories');

const create = async (req, res, next) => {
  try {
    const { name } = req.body;  

    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }
    const categoryId = await categoryService.createNewCategory(req.body);

    return res.status(201).json({ id: categoryId, name });  
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
};