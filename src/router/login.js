const express = require('express');
const loginController = require('../controllers/login');
const loginMiddleware = require('../middlewares/login');

const loginRouter = express.Router();

loginRouter.post('/', loginMiddleware, loginController.authenticate);

module.exports = loginRouter;