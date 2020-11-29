const mongoose = require('mongoose');
const { Schema } = mongoose;

const archiveSchema = new Schema({
	host: String,
	description: String,
	date: 
	{ type: Date,
	default: Date.now },
	iframe: String,
	tags: String,
});

module.exports =  mongoose.model("Show", archiveSchema);
