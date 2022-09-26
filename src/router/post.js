const express = require('express');
const postController = require('../controllers/post');
const { postMiddleware } = require('../middlewares/post');
const authMiddleware = require('../middlewares/auth');

const postRouter = express.Router();

postRouter.post('/', authMiddleware, postMiddleware, postController.create);

module.exports = postRouter;