const { verifyToken } = require('../tokens/tokenService');

exports.verifyToken = async (req, res, next) => {
  const { cookies } = req;
  try {
    console.log(cookies)
    if(!cookies || !cookies.token) {
      res.status(403).json({ message: 'authorization required '});
      return;
    }
    const token = cookies.token;

    const user = await verifyToken(token);
    req.user = user;
    next();
  } catch(err) {
    console.log(err, 'error?');
    res.status(403).json({ message: 'invalid or expired token' });
  }
};