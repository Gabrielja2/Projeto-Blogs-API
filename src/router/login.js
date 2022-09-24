const express = require('express');
const loginController = require('../controllers/login');
const authMiddleware = require('../middlewares/login');

const loginRouter = express.Router();

loginRouter.post('/', authMiddleware, loginController.authenticate);

module.exports = loginRouter;