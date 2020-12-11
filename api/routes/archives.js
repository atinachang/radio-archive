const express = require("express");
const router = express.Router();

// Require Archive Models
const Archive = require('../models/Archive');

// GET radio show archives
router.get('/', async (req, res) => {
	// gets all radio show documents from collection
	const shows = await Archive.find();
	res.json(shows)
})


// POST /shows/add
router.post('/add', async (req, res) => {
	const {host, description, date, iframe, tags} = req.body;
	// console.log(host, description, date, iframe, tags)
	// instance of our model
	const newShow = new Archive({
		host, 
		description,
		date,
		iframe, 
		tags
	})

	// Save our archived show
	const show = await newShow.save();
	  //return a message using res.json() to confirm the movie has been saved successfully
  res.json(show)
})




module.exports = router;