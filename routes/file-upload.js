const express = require("express");
const router = express.Router();
const upload = require("../services/file-upload");
const Listing = require('../models/Listing');
const passport = require("passport");
const validateListingInput = require("../validation/listings");


const singleUpload = upload.single("image");

router.post("/image-upload",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateListingInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    singleUpload(req, res, err => {
      return res.json({ imageUrl: req.file.location });
    }).then(photo => {
      Listing.findOne({ lat: req.body.lat, lng: req.body.lng })
        .then(listing => {
          if (listing) {
            return res.status(400).json({ address: 'This address is already listed' });
          } else {
            const newListing = new Listing({
              user: req.user.id,
              lat: req.body.lat,
              lng: req.body.lng,
              price: req.body.price,
              description: req.body.description,
              photo: photo.imageUrl
            });

            newListing
              .save()
              .then(listing => res.json(listing));
          }
        });
    });
  }
);


// outer.post("/new",
//   passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     const { isValid, errors } = validateListingInput(req.body);

//     if (!isValid) {
//       return res.status(400).json(errors);
//     }

//     Listing.findOne({ lat: req.body.lat, lng: req.body.lng })
//       .then(listing => {
//         if (listing) {
//           return res.status(400).json({ address: 'This address is already listed' });
//         } else {
//           const newListing = new Listing({
//             user: req.user.id,
//             lat: req.body.lat,
//             lng: req.body.lng,
//             price: req.body.price,
//             description: req.body.description
//           });

//           newListing
//             .save()
//             .then(listing => res.json(listing));
//         }
//       });
//   });

module.exports = router;
