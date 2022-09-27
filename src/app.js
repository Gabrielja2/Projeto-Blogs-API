const express = require('express');
const router = require('./router');
const errorMiddleware = require('./middlewares/error');
const authMiddleware = require('./middlewares/auth');
// ...

const app = express();

app.use(express.json());
app.use('/login', router.loginRouter);
app.use('/user', router.userRouter);
app.use('/categories', authMiddleware, router.categoyRouter);
app.use('/post', authMiddleware, router.postRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
app.use(errorMiddleware);
module.exports = app;
