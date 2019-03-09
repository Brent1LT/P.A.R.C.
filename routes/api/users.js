const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');

// router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.post('/register', (req, res) => {
  console.log("hello wolrd!")
  console.log(req.body);
  User.findOne({email: req.body.email})
    .then(user => {
      if (user){
        return res.status(400).json({email: 'A user has already registered with this email'});
      }else {
        const newUser = new User({
          email: req.body.email,
          password: req.body.password,
          username: req.body.username,
          name: req.body.name,
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
});


module.exports = router;
