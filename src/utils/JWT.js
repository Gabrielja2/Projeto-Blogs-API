require('dotenv').config();
const jwt = require('jsonwebtoken');
const errorGenerate = require('./errorGenerate');

const TOKEN_SECRET_KEY = process.env.JWT_SECRET;

const generateToken = ({ id, displayName, email }) => {
    const payload = {
      id,
      displayName,
      email,
    };
    
    const jwtConfig = {
      expiresIn: '55m',
      algorithm: 'HS256',
    };

    const token = jwt.sign(payload, TOKEN_SECRET_KEY, jwtConfig);
    return token;
};

const authenticateToken = async (token) => {
  try {
    const validateToken = jwt.verify(token, TOKEN_SECRET_KEY);
    console.log('validateToken', validateToken);
    return validateToken;
  } catch (error) {
    throw errorGenerate('Expired or invalid token', 401);
  }
};

module.exports = {
  generateToken,
  authenticateToken,
};