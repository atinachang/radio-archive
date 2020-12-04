const express = require('express');
// const cors = require('cors');
const app = express();
const bcrypt = require('bcrypt');


// bring in mongoose
const mongoose = require('mongoose');
// connection string to LOCAL DB
const uri = 'mongodb://localhost:27017/radio-archive';
// where are SERVER will run, not DB
const PORT = 5000;

const showRouter = require('./routes/archives');

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
app.use('/api/shows', showRouter);


// hashing password
const password = 'admin123';
const hashPassword = async () => {
  const hash = await bcrypt.hash(password, 12)
  // console.log(hash)
}

hashPassword()

const hashedPW = '$2b$12$JMF.gB.rwVinlW9ui2XfHOx/qUu2.uTlovS/k75sFQmVY2pEdF3EO';
const comparePW = async () => {
  const isSame = await bcrypt.compare(password, hashedPW);
  // console.log(isSame)
}

comparePW();

// Start server
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
})