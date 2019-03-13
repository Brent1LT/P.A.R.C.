const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require("passport");
const validateListingInput = require("../../validation/listings");
const Listing = require("../../models/Listing");

//reset
router.get(`/test`, (req, res) => res.json({ msg: "This is the listings route" }));


//index
router.get("/", (req, res) => {
  Listing
    .find()
    .sort({ date: -1})
    .then(listings => {
      return res.json(listings)
    })
    .catch(err => res.status(400).json(err));
});

//find all listings that a user has made
router.get('/user/:user_id', (req, res) => {
  Listing.find({user: req.params.user_id})
    .then(listings => res.json(listings))
    .catch(err => res.status(400).json(err));
});

//find a specific listing
router.get('/:id', (req, res) => {
  Listing.findById(req.params.id)
    .then(listing => res.json(listing))
    .catch(err => res.status(400).json(err));
});

//create a listing
router.post("/new",
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    const { isValid, errors } = validateListingInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

  Listing.findOne({lat: req.body.lat, lng: req.body.lng})
    .then(listing => {
      if (listing){
        return res.status(400).json({address: 'This address is already listed'});
      }else {
        const newListing = new Listing({
          user: req.user.id,
          lat: req.body.lat,
          lng: req.body.lng,
          price: req.body.price,
          description: req.body.description,
          photo: req.body.photo,
          street: req.body.street,
          zip: req.body.zip,
          state: req.body.state,
          city: req.body.city
        });

        newListing
          .save()
          .then(listing => res.json(listing));
      }
    });
});

//update a listing
router.put('/update/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Listing.findOne({ _id: req.params.id })
      .then(listing => {
        const { isValid, errors } = validateListingInput(req.body);
        if (!isValid) {
          return res.status(400).json(errors);
        }
        Object.assign(listing, req.body);
        return listing.save()
      })
      .then(listing => res.json(listing))
      .catch(err => res.status(400).json(err));
  });

router.delete('/delete/:id',
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    Listing.findByIdAndRemove({_id: req.params.id},
      (err, listing) => {
        if (err) return res.json(err);
        else res.json("Sucessfully removed");
      });
  });

module.exports = router;
