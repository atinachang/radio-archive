const express = require('express');
// const bcrypt = require('bcrypt');
// bring in mongoose
const mongoose = require('mongoose');
// const cookieParser = require('cookie-parser');
// bring in path?
const path = require("path");
const showRouter = require('./api/routes/archives');
const userRouter = require('./api/routes/users')

//mongodb+srv://admin:53RCx09szrKdZ0OK@shows.c8z3g.mongodb.net/ISO?retryWrites=true&w=majority


// connection string to LOCAL DB
// const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/radio-archive';
const DB_URI = 'mongodb+srv://admin:53RCx09szrKdZ0OK@shows.c8z3g.mongodb.net/ISO?retryWrites=true&w=majority';
// where are SERVER will run, not DB
const PORT = process.env.PORT || '5000';

const app = express();

// app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

// Express body parser middleware
app.use(express.json({ extended: false }));
// app.use(express.json())

// TODO
// Define Routes
app.use('/api/shows', showRouter);
app.use('/api/users', userRouter)



// server.js at the very end of the file.
// console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('./build'));
    // only add this part if you are using React Router
    app.get('*', (req,res) =>{
        console.log(path.join(__dirname+'/build/index.html'));
        res.sendFile(path.join(__dirname+'/build/index.html'));
    });
}


// Connect to database
// console.log(DB_URI)
mongoose
  .connect(DB_URI,     
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },

    )
  .then(() => {
    // console.log(`Successfully connected to: ${DB_URI} `);
    // Start server
app.listen(PORT, () => {
  console.log(`Successfully connect to: port ${PORT}`);
})

  })
  .catch( err => {
    console.log(err.message);
  })