const { User, BlogPost, Category, sequelize } = require('../models');
const errorGenerate = require('../utils/errorGenerate');

const createBlogPost = async ({ title, content, categoryIds }) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const newPost = await BlogPost.create({ title, content }, { transaction: t });
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

const findPosts = async () => {
  try {
    const posts = BlogPost.findAll({
      attributes: {
        exclude: ['user_id'],
      },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return posts;
  } catch (error) {
    console.log(error);
  }
};

const findPostById = (id) => {
  try {
    const post = BlogPost.findOne({
      where: { id },
      attributes: {
        exclude: ['user_id'],
      },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return post;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createBlogPost,
  findPosts,
  findPostById,
};