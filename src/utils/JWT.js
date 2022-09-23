const jwt = require('jsonwebtoken');

const TOKEN_SECRET_KEY = process.env.TOKEN_SECRET_KEY || 'secretJWT';

const generateToken = ({ id, email }) => {
const payload = {
id,
email,
};

const jwtConfig = {
expiresIn: '15m',
algorithm: 'HS256',
};

const token = jwt.sign(payload, TOKEN_SECRET_KEY, jwtConfig); // TOKEN -> ABC.1234.XYZ

return token;
};

const authenticateToken = async (token) => {
if (!token) {
const status = 401;
const message = 'missing token';
throw { status, message }; 
}

try {
const validateToken = jwt.verify(token, TOKEN_SECRET_KEY);
return validateToken;
} catch (error) {
console.log(error);
const status = 401;
const message = 'jwt malformed';
throw { status, message };
}
};

module.exports = {
generateToken,
authenticateToken,
};