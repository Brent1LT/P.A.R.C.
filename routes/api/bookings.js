const express = require("express");
const router = express.Router();
const passport = require('passport');
const Booking = require('../../models/Booking')
const validateBookingInput = require('../../validations/bookings')

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateBookingsInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newBooking = new Booking ({
      text: req.body.text,
      user: req.user.id
    });

    newBooking.save().then(booking => res.json(booking));
  }
);

router.get(`/listings/:id/bookings`,
  (req, res) => {
    const bookings = Booking.find({ listing: req.params.id })
    .then(bookings => res.json(bookings))
    .catch(err =>
      res.status(404).json({ nobookingsfound: "No bookings found for that listing"}
      )
    );
  }
);

module.exports = router;