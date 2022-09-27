const postService = require('../services/post');
const { authenticateToken } = require('../utils/JWT');
const { BlogPost } = require('../models');
const errorGenerate = require('../utils/errorGenerate');

const create = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    
    req.userId = await authenticateToken(token);    
    const post = await postService.createBlogPost(req.body);
  
    if (post === undefined) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }
    const response = { ...post.dataValues, userId: req.userId.id };
    return res.status(201).json(response); 
  } catch (error) {
    next(error);
  }
};

const getPosts = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    await authenticateToken(token);

    const posts = await postService.findPosts();

    return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

const getPostById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const token = req.headers.authorization;
    await authenticateToken(token);

    const isValidBlogPostId = await BlogPost.findAndCountAll({
      where: { id },
    });

    if (isValidBlogPostId.count !== 1) {
      throw errorGenerate('Post does not exist', 404);
    }

    const post = await postService.findPostById(id);

    return res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    await authenticateToken(token);
    
    const { id } = req.params;
    const userId = await authenticateToken(token); 
 
    const post = await postService.deletePost(id, userId.id);

    if (post === 0) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const getSeachPosts = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    await authenticateToken(token);
    const { q } = req.query;
    const posts = await postService.findBySeach(q);
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getPosts,
  getPostById,
  deletePost,
  getSeachPosts,
};