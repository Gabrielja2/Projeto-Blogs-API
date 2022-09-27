const express = require('express');
const userController = require('../controllers/user');
const { userMiddleware } = require('../middlewares/user');
const authMiddleware = require('../middlewares/auth');

const userRouter = express.Router();

userRouter.get('/', authMiddleware, userController.getUsers);
userRouter.delete('/me', authMiddleware, userController.deleteUser);
userRouter.get('/:id', authMiddleware, userController.getUserById);
userRouter.post('/', userMiddleware, userController.create);

module.exports = userRouter;
