const User = require('../models/User');

exports.createUser = async ({email, password}) => {
try {
	const newUser = new User({
		email,
		password
	});
	const user = await newUser.save();
	return user;
} catch(err) {
	throw err
}
}

exports.findUserByID = async (id) => {
  try {
    const user = await User.findById(id);
    return {
      id: user._id,
      email: user.email,
    };
  } catch (err) {
    throw err;
  }
};

exports.findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (ex) {
    throw ex;
  }
}

exports.findUserByID = async (id) => {
  try {
    const user = await User.findById(id);
    return {
      id: user._id,
      email: user.email,
    };
  } catch (ex) {
    throw ex;
  }
};