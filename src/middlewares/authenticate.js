const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

const authenticate = expressJwt({
  secret: '1234',
  algorithms: ['HS256'],
  userProperty: 'user',
});

module.exports = authenticate;
