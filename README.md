# PARC

[Live Site](https://lets-parc.herokuapp.com)

PARC is a garage-share website. It uses MongoDB, Express, React and Node.js.

The beta version took 6 days from start to finish.

## Features

* Users can create and view listings
* Users can rent parkings spots
* Users can create accounts with salted passwords
* Users can view their bookings


## AWS S3 Integration
Adding Amazon Web Services was a huge part of application and allowed our users
to add a photo onto their listing. This was difficult to implement due to the fact 
that there are hardly any guides available online and I had to collaborate with 
several other developers in order to get it fully functional. Once it was functional,
it proved to be an integral feature of our app. It also helps with scalability 
since we don't need to host all the images in the database which would increase 
server-load.

![AWS image](https://github.com/Brent1LT/P.A.R.C./blob/master/documents/assets/design_docs/readme-s3.png)
```
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
```


## HIGHLIGHTED FEATURE 2
``` render() {
    if (this.props.bookings === undefined) return null;
    // ITERATE THROUGH THIS.PROPS.BOOKINGS
    // TO CREATE THE MOMENT RANGE OBJECTS AS SEEN BELOW
    const BAD_DATES = [];
    const moment = extendMoment(Moment);

    Object.keys(this.props.bookings).map(booking => (
      BAD_DATES.push(moment.range(
        moment(this.props.bookings[booking].startDate, 'YYYY-MM-DD'),
        moment(this.props.bookings[booking].endDate, 'YYYY-MM-DD').add(1, 'day')
      ))
    ));

    const isBlocked = day => BAD_DATES.filter(d => d.contains(day, 'day')).length > 0;

    return (
      <div className="booking-form" style={{width: 400 +'px', height: 400 +'px'}} >
        <h2>Book This Spot</h2>
        <div hidden={!this.state.errors}>
          THIS IS A FUCKING ERROR
        </div>
        <form className='form-booking' onSubmit={this.handleSubmit}>
          <DateRangePicker
            required={true}
            small={true}
            startDate={this.state.startDate}
            startDateId="start-date-field"
            startDatePlaceholderText="Start Date"
            endDate={this.state.endDate}
            endDateId="end-date-field"
            endDatePlaceholderText="End Date"
            onDatesChange={({startDate, endDate}) => this.setState({ startDate, endDate })}
            showClearDates={true}
            isDayBlocked={isBlocked}
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
            hideKeyboardShortcutsPanel={true}
          />
          <button className="booking-button">Book Me!</button>
        </form>
      </div>
    );
  };
};
```

## Project Design
Our goal in creating PARC was to create a quick, stable MERN stack build that utilized an external API--google maps. We gave ourselves 6 days to learn and utilize the stack.

## Technologies
On the backend, MongoDB, Node.js, Express and Heroku were chosen for ease and versatility.

For the front, Redux was used for state and reducers, React for components and Axios for backend and API calls.

Images were hosted using AWS S3.

## Planned Features
* Cleanup bookings
* Redesign UI