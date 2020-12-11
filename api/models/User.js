const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrpyt = require('bcryptjs');

// try regex for email and password = admin
// see user validation/auth notes

const userSchema = new Schema({
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	// role: {
  //     type: String,
  //     enum: ['viewer', 'admin'],
  //     default: 'viewer'
  //   }
});

userSchema.pre('save', async function(next) {
  const user = this;
  console.log(typeof user);

  try {
    if (user.isModified('password') || user.isNew) {
      const encrpytedPassword = await bcrpyt.hash(user.password, 12);
      user.password = encrpytedPassword;
    }

    next();
  } catch(ex) {
    next(ex);
  }
});

userSchema.methods.comparePasswords = function(password) {
  const user = this;
  return bcrpyt.compare(password, user.password);
}

module.exports = mongoose.model("User", userSchema);