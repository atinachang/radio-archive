const express = require('express');
// const cors = require('cors');
const app = express();
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');



// bring in mongoose
const mongoose = require('mongoose');
// connection string to LOCAL DB
const uri = 'mongodb://localhost:27017/radio-archive';
// where are SERVER will run, not DB
const PORT = 5000;

const showRouter = require('./routes/archives');
const userRouter = require('./routes/users')

// Connect to database
mongoose
  .connect(uri,     
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },

    )
  .then(() => {
    console.log(`Successfully connected to: ${uri} `);
  })
  .catch( err => {
    console.log(err.message);
  })

app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

// Express body parser middleware
app.use(express.json({ extended: false }));

// TODO
// Define Routes
app.use('/api/shows', showRouter);
app.use('/api/users', userRouter)

// FROM NOTES, edit for APP!
// app.get('/api/shows', (req, res) => {
// 	// get all SHOWS from db for user if not admin
// })

// app.use(verifyUser);
// app.use(verifyUser.requireAdmin)
// app.post('/api/users', verifyUser, requireAdmin, async (req, res) => {
// });
//     const note = new Note(req.body);
//     const doc = await note.save();
//     res.send(doc);
//Locking down an entire section of your application
//If you have lots of routes that are using your middleware, you can use middleware to restrict usage to an entire subset of your app:

// app.use('/api/note/*', requireRole('editor'))

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