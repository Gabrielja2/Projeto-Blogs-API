const express = require('express');
const userController = require('../controllers/user');
const { userMiddleware } = require('../middlewares/user');

const userRouter = express.Router();

userRouter.post('/', userMiddleware, userController.create);

module.exports = userRouter;
