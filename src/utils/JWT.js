require('dotenv').config();
const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET || 'suaSenhaSecreta';

const generateToken = ({ displayName, email }) => {
    const payload = {
      displayName,
      email,
    };
    
    const jwtConfig = {
      expiresIn: '15m',
      algorithm: 'HS256',
    };

    const token = jwt.sign(payload, TOKEN_SECRET, jwtConfig);
    console.log('token', token);
    return token;
};

module.exports = generateToken;