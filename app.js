const path = require('path');
const mongoose = require('mongoose');
const express = require("express");
const users = require("./routes/api/users");
const listings = require("./routes/api/listings");
const bookings = require("./routes/api/bookings");
const bodyParser = require("body-parser");
const db = require('./config/keys').mongoURI;
const passport = require('passport');
const fileRoutes = require('./routes/file-upload');
const app = express();

// This logic is used for Heroku deployment
// to make sure we don't have "run build" before pushing to Heroku
app.use(express.static('frontend/build'));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'public', 'index.html'));
});

mongoose
.connect(db, {useNewUrlParser: true})
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));
require('./config/passport')(passport);
app.use(passport.initialize());

app.get("/", (req, res) => res.json("Hello!"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/listings", listings);
app.use("/api/users", users);
app.use('/file-upload', fileRoutes);
app.use("/api/bookings", bookings);
app.use("/api/listings/new", listings);
app.use('/api/users/current', users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
