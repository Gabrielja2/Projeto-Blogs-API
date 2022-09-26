const { Category } = require('../models');

const createNewCategory = async ({ name }) => {
  try {
      const newCategory = await Category.create({ name });
      console.log('newCategory', newCategory.null);
      return newCategory.null;
  } catch (error) {
    console.log(error);
  }  
};

module.exports = {
  createNewCategory,
};