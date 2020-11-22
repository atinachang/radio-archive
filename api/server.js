const express = require('express');
const app = express();


// bring in mongoose
const mongoose = require('mongoose');
// connection string to LOCAL DB
const uri = 'mongodb://localhost:27017/radio-archive';
// where are SERVER will run, not DB
const PORT = 5000;

const showRouter = require('../src/routes/archives');

// Connect to database
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Successfully connected to: ${uri} `);
  })
  .catch( err => {
    console.log(err.message);
  })

// Express body parser middleware
app.use(express.json({ extended: false }));

// TODO
// Define Routes
app.use('/shows', showRouter)

// Start server
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
})