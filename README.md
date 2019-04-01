# PARC

[Live Site](https://lets-parc.herokuapp.com)

PARC is a garage-share website. It uses MongoDB, Express, React and Node.js.

The beta version took 6 days from start to finish.

## Features

* Users can create and view listings
* Users can rent parkings spots
* Users can create accounts with salted passwords

## HIGHLIGHTED FEATURE 1

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