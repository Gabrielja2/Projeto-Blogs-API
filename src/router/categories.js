const express = require('express');
const categoryController = require('../controllers/categories');
const authMiddleware = require('../middlewares/auth');

const categoryRouter = express.Router();

categoryRouter.post('/', authMiddleware, categoryController.create);
categoryRouter.get('/', authMiddleware, categoryController.getCategories);

module.exports = categoryRouter;