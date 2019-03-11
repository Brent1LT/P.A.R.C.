const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require("passport");
const validateListingInput = require("../../validation/listings");
const Listing = require("../../models/Listing");

// router.get("/test", (req, res) => res.json({ msg: "This is the listings route" }));

router.post("/new", 
  passport.authenticate('jwt', {session: false}),
  (req, res) => {    
    const { isValid, errors } = validateListingInput(req.body);

    if (!isValid){
      return res.status(400).json(errors);
    }

    const newListing = new Listing({
      user: req.user.id,
      lat: req.body.lat,
      lng: req.body.lng,
      price: req.body.price,
      description: req.body.description
    });

    newListing
      .save()
      .then(listing => res.json(listing));
});

module.exports = router;
