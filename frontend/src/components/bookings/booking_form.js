import React, { Component } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.currentUser,
      listing: null,
      startDate: null,
      endDate: null,
      offMarket: false,
      focusedInput: null,
      errors: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.createBooking = this.createBooking.bind(this);
    this.errorDates = this.errorDates.bind(this);
    this.resetState = this.resetState.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllListingBookings(this.props.listing); //listing.id
  }

  handleSubmit(e) {
    e.preventDefault();
    const booking = {
      user: this.state.user.id,
      listingId: this.props.listing._id,
      //The two dates below will be parsed into this format: "YYYY-MM-DD"
      startDate: this.state.startDate._d,
      endDate: this.state.endDate._d,
      offMarket: true,
      errors: false
    };
    debugger;

    if (this.errorDates(booking)) {
      this.resetState();
    } else {
      this.createBooking(booking);
    }
  }

  errorDates(booking) {
    let doubleBooking = false
    let book = this.props.bookings;

    let newBookingStart = new Date(booking.startDate);
    let newBookingEnd = new Date(booking.endDate);
    Object.keys(this.props.bookings).forEach((id) => {
      let oldBookingStart = new Date(book[id].startDate);
      let oldBookingEnd = new Date (book[id].endDate);

      if (oldBookingStart >= newBookingStart &&
          oldBookingStart <= newBookingEnd) {
        doubleBooking = true;
        return null;
      } else if (oldBookingEnd >= newBookingStart &&
                oldBookingEnd <= newBookingEnd) {
        doubleBooking = true;
        return null;
      }
    });
    return doubleBooking;
  }

  createBooking(booking) {
    this.props.createBooking(booking)
      .then(() => {
        this.props.fetchAllListingBookings(this.props.listing); //listing.id
      })
      .then(() => {
        this.props.history.push('/bookings');
      });
  }

  resetState() {
    this.setState({
      user: this.props.currentUser,
      listing: null,
      startDate: null,
      endDate: null,
      offMarket: false,
      focusedInput: null,
      errors: true
    });
  }

  renderErrors() {
    let errors = "Please choose a proper date";
    if (!this.state.errors) errors = '';

    return (
      <div>{ errors }</div>
    )
  }

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
};

export default BookingForm;
