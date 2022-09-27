const express = require('express');
const categoryController = require('../controllers/categories');

const categoryRouter = express.Router();

categoryRouter.post('/', categoryController.create);
categoryRouter.get('/', categoryController.getCategories);

module.exports = categoryRouter;