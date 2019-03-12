const express = require("express");
const router = express.Router();
const upload = require("../services/file-upload");
const Listing = require('../models/Listing');
const passport = require("passport");
const validateListingInput = require("../validation/listings");


const singleUpload = upload.single("image");

router.post("/image-upload",
  passport.authenticate("jwt", { session: false }),
  upload.single('image'),
  (req, res) => {
      // let photo = res.json({ imageUrl: req.file.location });      
    Listing.findOne({street: req.body.street})
        .then(listing => {
          if (listing) {
            return res
              .status(400)
              .json({ address: "This address is already listed" });
          } else {
            const newListing = new Listing({
              user: req.user.id,
              lat: req.body.lat,
              lng: req.body.lng,
              price: req.body.price,
              description: req.body.description,
              street: req.body.street,
              city: req.body.city,
              state: req.body.state,
              zip: req.body.zip,
              photo: req.file.location
            });
            const { isValid, errors } =  validateListingInput(newListing);

            if (!isValid) {
              return res.status(400).json(errors);
            }
            newListing
              .save()
              .then(listing => res.json(listing))
              .catch(err => res.status(400).json(err));
          }
        })
        .catch(err => console.log("FindOne Failed", err));
 
  }
);


module.exports = router;
