const mongoose = require('mongoose');
const express = require("express");
const users = require("./routes/api/users");
const listings = require("./routes/api/listings");
const bodyParser = require("body-parser");
const db = require('./config/keys').mongoURI;
const passport = require('passport');


const app = express();

mongoose
.connect(db, {useNewUrlParser: true})
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));
app.get('/', (req, res) => res.send('Hello!'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/listings", listings);

app.use(passport.initialize());
require('./config/passport')(passport);
app.use("/api/listings/new", listings);
app.use('/api/users/current', users);
app.use('/api/bookings/delete/:id', bookings);
app.use('/api/bookings/:userId', bookings);
app.use('/api/bookings/:listingId', bookings);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

