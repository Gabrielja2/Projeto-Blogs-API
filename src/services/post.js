const { BlogPost, Category, sequelize } = require('../models');
const errorGenerate = require('../utils/errorGenerate');
// const errorGenerate = require('../utils/errorGenerate');
// const errorGenerate = require('../utils/errorGenerate');

const createBlogPost = async ({ title, content, categoryIds }) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const newPost = await BlogPost.create(
        { title, content }, { transaction: t },      
        );
        const categoryExists = await Category.findAndCountAll({
          where: { id: categoryIds },
        });
        if (categoryExists.count !== categoryIds.length) {
          throw errorGenerate('"categoryIds" not found', 400);
        }
      await newPost.addCategories(categoryIds, { transaction: t });
      return newPost;
    });
    return result;
  } catch (error) {
    console.log('akii dnv', error);
  }
};

module.exports = {
  createBlogPost,
};