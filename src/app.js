const express = require('express');
const loginRouter = require('./router/login');
const errorMiddleware = require('./middlewares/error');
// ...

const app = express();

app.use(express.json());
app.use('/login', loginRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
app.use(errorMiddleware);
module.exports = app;
