// const JWTUtils = require('../utils/JWT');

// const authMiddleware = async (req, res, next) => {
// const { token } = req.headers;

// const user = await JWTUtils.authenticateToken(token);

// if (!user) {
// throw { status: 401, message: 'jwt malformed' };
// }

// req.locals = user;
// next();
// };

// module.exports = authMiddleware;