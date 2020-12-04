const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.route('/')
.post(async (req ,res) => {
	const {email, password} = req.body;
	try {
		const user = await User({
			email, password
		})
		res.json({
			data: {
				id: user._id
			}
		})
	} catch(e) {
		console.log(e)
	}
})

router.route('/login')
.post(async (req, res) => {
	const {email, password} = req.body;
	
})