const postService = require('../services/post');
const { authenticateToken } = require('../utils/JWT');

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

module.exports = {
  create,
  getPosts,
};