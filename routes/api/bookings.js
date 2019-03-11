const express = require("express");
const router = express.Router();
const passport = require('passport');
const Booking = require('../../models/Booking');
const validateBookingsInput = require('../../validations/bookings');

router.post('/:listingId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateBookingsInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    let startDate = new Date(req.body.startDate);
    let endDate = new Date(req.body.endDate);

    const newBooking = new Booking ({
      startDate,
      endDate,
      offMarket: req.body.offMarket,
      listing: req.params.listingId,
      user: req.user.id
    });

    newBooking.save().then(booking => res.json(booking));
  }
);

router.get(`/:userId`,
  (req, res) => {
    Booking.find({ user: req.params.userId })
    .then(bookings => res.json(bookings))
    .catch(err =>
      res.status(404).json({ nobookingsfound: "No bookings found for that listing"}
      )
    );
  }
);

router.delete(`/delete/:id`,
  Booking.findByIdAndRemove({_id: req.params.id},
    function(err){
      if(err) res.json(err);
      else res.json('Successfully removed');
  })
);

module.exports = router;