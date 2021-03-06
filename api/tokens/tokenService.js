const jwt = require('jsonwebtoken');
const KEY = 'secret phrase';

exports.createToken = (user) => {
  const token = jwt.sign(user, KEY);
  return token;
}

exports.verifyToken = async (token) => {
  let user;
  jwt.verify(token, KEY, (err, decoded) => {
    if (err)  {
      console.log(err)
      throw err;
    }
    user = decoded;
  });

  return user;
}