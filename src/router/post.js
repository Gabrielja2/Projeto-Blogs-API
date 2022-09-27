const express = require('express');
const postController = require('../controllers/post');
const { postMiddleware } = require('../middlewares/post');
const authMiddleware = require('../middlewares/auth');

const postRouter = express.Router();

postRouter.get('/', authMiddleware, postController.getPosts);
postRouter.get('/search', authMiddleware, postController.getSeachPosts);
postRouter.get('/:id', authMiddleware, postController.getPostById);

postRouter.post('/', authMiddleware, postMiddleware, postController.create);
postRouter.put('/:id', authMiddleware, postController.editPost);
postRouter.delete('/:id', authMiddleware, postController.deletePost);

module.exports = postRouter;