const express = require('express');
const app = express();
// const cookieParser = require('cookie-parser');



// bring in mongoose
const mongoose = require('mongoose');
// connection string to LOCAL DB
const DB_URI = 'mongodb://localhost:27017/radio-archive';
// where are SERVER will run, not DB
const PORT = 5000;

const showRouter = require('./routes/archives');
const userRouter = require('./routes/users')

// Connect to database
mongoose
  .connect(DB_URI,     
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },

    )
  .then(() => {
    console.log(`Successfully connected to: ${DB_URI} `);
  })
  .catch( err => {
    console.log(err.message);
  })

// app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

// Express body parser middleware
app.use(express.json({ extended: false }));

// TODO
// Define Routes
app.use('/api/shows', showRouter);
app.use('/api/users', userRouter)




// Start server
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
})