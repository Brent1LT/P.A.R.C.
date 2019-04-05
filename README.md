# PARC

[Live Site](https://lets-parc.herokuapp.com)

P.A.R.C. is a parking-share web app where anyone with a private spot, or driveway, can list it to make it publicly available to others who want to rent that space for various defined periods of time (e.g. hour, day, week, month).

This project utilizes MongoDB, Express.js, React/Redux and Node.js.

From start to finish, the beta version was completed in 6 days.

## Technologies
On the backend, the following technologies were chosen for their ease-of-use and versatility.
* *MongoDB*
* *Express.js*
* *Node.js*
* *Heroku*

For the frontend, we used the following libraries to take advantage of their specific features.
* *React*, for it's modular & re-usable components
* *Redux*, for it's global store and dynamic reducers
* *Axios*, for it's backend connection & flexible API calls

Images were hosted using Amazon Web Services (AWS) S3.

## Features
* Users can create and view listings
* Parking spot listings can be found through a search bar
* Parking spot listings can be found through an interactive map
* Users can book parking spots via a dynamic calendar*
* User accounts are secured with hashed & salted passwords
* Users are able to view & delete their bookings

## AWS S3 Integration
Adding Amazon Web Services was a core part of our application and allowed our users to add photos to their listings.

This was especially challenging to implement due to the fact that there are hardly any guides available online. To overcome this, we collaborated with several other developers to help get our buckets operational.

Once functional, it proved to be an integral optimization of our app. It helps with scalability as we don't need to host all of the images in the database, which would subsequently increase server-load.

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

## Mapbox GL JS Integration
To display our listings we incorporated the [Mapbox GL JS](https://github.com/mapbox) API into our app. Because this library and map use WebGL to render everything, it allowed us the ability to create custom elements and have cross-platform compatibility.

![Mapbox Integration](https://github.com/Brent1LT/P.A.R.C./blob/master/documents/assets/design_docs/readme-map.png)
```
constructor(props) {
  super(props);

  this.state = {
    viewport: {
      // These default LAT & LNG coords are what the map centers on
      latitude: 37.7599034,
      longitude: -122.4183564,
      zoom: 13.25,
      width: '100%',
      height: '50vh',
    },
  };
};

render() {
  if (this.props.listings.length === 0) {
    return (null);
  }

  const { viewport } = this.state;

  const markers = this.props.listings.map((listing) => {
    return (
      <div>
        <Marker
            className="map-marker"
            latitude={listing.lat}
            longitude={listing.lng}
            captureClick={false}
            captureDoubleClick={false}
            captureDrag={false}
          >
            <Pin />
        </Marker>
      </div>
    );
  });

  return (
    <div className="map-container">
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={frontendKeys.mapApiKey}
        onViewportChange={(viewport) => this.setState({viewport})}
      >
        {markers}
        <div className="map-nav">
          <NavigationControl
            showCompass={false}
            captureClick={false}
            captureDoubleClick={false}
            captureDrag={false}
            onViewportChange={(viewport) => this.setState({viewport})}
          />
        </div>
      </ReactMapGL>
    </div>
  );
};
```

## AirBNB Calendar API Integration
We integrated AirBNB's calendar API ([react-dates](https://github.com/airbnb/react-dates)) so that we could show a listings currently booked dates, as well as highlight the range of dates that a current user was looking at.

![Calendar API](https://github.com/Brent1LT/P.A.R.C./blob/master/documents/assets/design_docs/readme-bookings.png)
```
render() {
  if (this.props.bookings === undefined) return null;
  // ITERATE THROUGH THIS.PROPS.BOOKINGS
  // TO CREATE THE MOMENT RANGE OBJECTS AS SEEN BELOW
  const BAD_DATES = [];
  const moment = extendMoment(Moment);

  Object.keys(this.props.bookings).map(booking => (
    BAD_DATES.push(moment.range(
      moment(this.props.bookings[booking].startDate, 'YYYY-MM-DD'),
      moment(this.props.bookings[booking].endDate, 'YYYY-MM-DD')
    ))
  ));

  const isBlocked = day => BAD_DATES.filter(d => d.contains(day, 'day')).length > 0;

  return (
    <div className="booking-form" style={ {width: 400 +'px', height: 400 +'px'} } >
      <h2>Book This Spot</h2>
      <form className='form-booking' onSubmit={ this.handleSubmit }>
        <DateRangePicker
          required={ false }
          small={ true }
          startDate={ this.state.startDate }
          startDateId="start-date-field"
          startDatePlaceholderText="Start Date"
          endDate={ this.state.endDate }
          endDateId="end-date-field"
          endDatePlaceholderText="End Date"
          onDatesChange={ ({ startDate, endDate }) => this.setState({ startDate, endDate }) }
          showClearDates={ true }
          isDayBlocked={ isBlocked }
          focusedInput={ this.state.focusedInput }
          onFocusChange={ focusedInput => this.setState({ focusedInput }) }
          hideKeyboardShortcutsPanel={ true }
        />
        <button className="booking-button">Book Me!</button>
      </form>
      <h2 className="booking-form-error" hidden={!this.state.errors}> { this.renderErrors() } </h2>
    </div>
  );
};
```

## Project Design
When designing P.A.R.C., our goal was to create a quick & stable MERN stack build that utilized an external API (Mapbox). We also wanted to offer an intuitive, friendly and clean user interface & experience. We gave ourselves 6 days to learn the technologies, implement everything and provide a working Beta version.

## Future Features & Tasks
* Add more cities
* Implement a payment system
* Google/Apple calendar integration
* Re-design UI
