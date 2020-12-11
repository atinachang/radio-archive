const express = require('express');
const router = express.Router();
const {createUser, findUserByID, findUserByEmail} = require('../controllers/userController');
const {createToken} = require('../tokens/tokenService');
const {verifyToken} = require('../middleware/verifyToken');

// const User = require('../models/User');

router.route('/')
.post(async (req ,res) => {
	const {email, password} = req.body;
	if (!email || email === "") {
		res.status(400).json({ message: 'email must be provided'});
		return;
	}
	
	if(!password || password === ""){
		res.status(400).json({message: 'password must be provided'})
	}
	try {
		// does the user exist?
		const foundUser = await findUserByEmail(email);
      if (foundUser) {
        res.status(400).json({ message: `email '${email}' already exists'` });
        return;
      }
		// creating user functionality
      const user = await createUser({ email, password});
      res.json({ data: { id: user._id } });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'internal server error' });
    }

})

router.route('/login')
.post(async (req, res) => {
	const {email, password} = req.body;

	if(!email || email === "" ) {
		res.status(400).json({message: "email is not correct"})
		return;
	}

	if (!password || password === "") {
		res.status(400).json({message: "password is not correct"})
		return;
	}

	try {
		      // does the user exist?
      const user = await findUserByEmail(email);
      if (!user) {
        res.status(400).json({ message: 'password and email do not match'});
        return;
      }

      // do the password match?
      const isMatch = await user.comparePasswords(password);
      if (!isMatch) {
        res.status(400).json({ message: 'password and email do not match'});
        return;
      }
		//creating usertoken on login
		const token = createToken({ id: user._id});
		res.cookie('token', token);
		res.status(200).json({})
	} catch(err) {
		console.log(err)
		res.status(500).json({ message: 'internal server error'})
	}
	
})


router
	.use(verifyToken)
	.route('/me')
	.get(async (req, res) => {
		try {
			const user = await findUserByID(req.user.id);
			res.json({data: user})
		} catch(err) {
			console.log(err)
			res.status(500).json({message: 'internal server error'})
		}
	});

// set up only 1 admin email and password
	
	module.exports = router;