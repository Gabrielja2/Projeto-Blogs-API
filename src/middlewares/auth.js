// const errorGenerate = require('../utils/errorGenerate');
// const { authenticateToken } = require('../utils/JWT');

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;  

  if (token === undefined || token.length <= 0) {
    return res.status(401).json({ message: 'Token not found' });
  }   
  
  // const user = await authenticateToken(token);
  // console.log('user', user);

  // if (!user) {
  //   return res.status(401).json({ message: 'Expired or invalid token' });
  // }
  
  // req.locals = user;
  next();
};

module.exports = authMiddleware;