const express = require('express');
const postController = require('../controllers/post');
const { postMiddleware } = require('../middlewares/post');

const postRouter = express.Router();

postRouter.get('/', postController.getPosts);
postRouter.get('/search', postController.getSeachPosts);
postRouter.get('/:id', postController.getPostById);

postRouter.post('/', postMiddleware, postController.create);
postRouter.put('/:id', postController.editPost);
postRouter.delete('/:id', postController.deletePost);

module.exports = postRouter;