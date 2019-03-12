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
    };
  };

  componentDidMount() {
    this.props.fetchAllListingBookings(this.props.listing.id);
  };

  handleSubmit(e) {
    e.preventDefault();
    const booking = {
      user: this.state.user,
      listingId: this.props.listing.id,
      // the two dates below will be parsed into this format: "YYYY-MM-DD"
      startDate: this.state.startDate._d,
      endDate: this.state.endDate._d,
      offMarket: true,
    }
    this.props.createBooking(booking)
      .then(this.resetState);
  };

  resetState() {
    this.setState({
      user: this.props.currentUser,
      listing: null,
      startDate: null,
      endDate: null,
      offMarket: false,
      focusedInput: null,
    });
  };

  render() {
    if (this.props.bookings === undefined) return null;

    // ITERATE THROUGH THIS.PROPS.BOOKINGS
    // TO CREATE THE MOMENT RANGE OBJECTS AS SEEN BELOW

    const moment = extendMoment(Moment);
    const BAD_DATES = [
      moment.range(
        moment('2019-03-11', 'YYYY-MM-DD'),
        moment('2019-03-13', 'YYYY-MM-DD').add(1, 'day'),
      ),
      moment.range(
        moment('2019-03-15', 'YYYY-MM-DD'),
        moment('2019-03-16', 'YYYY-MM-DD').add(1, 'day'),
      ),
      moment.range(
        moment('2019-03-18', 'YYYY-MM-DD'),
        moment('2019-03-19', 'YYYY-MM-DD').add(1, 'day'),
      ),
      moment.range(
        moment('2019-03-21', 'YYYY-MM-DD'),
        moment('2019-03-22', 'YYYY-MM-DD').add(1, 'day'),
      ),
      moment.range(
        moment('2019-03-24', 'YYYY-MM-DD'),
        moment('2019-03-26', 'YYYY-MM-DD').add(1, 'day'),
      ),
    ];
    const isBlocked = day => BAD_DATES.filter(d => d.contains(day, 'day')).length > 0;

    return (
      <div className="booking-form" style={{width: 300 +'px', height: 300 +'px'}} >
        <h3>Book This Spot</h3>
        <form onSubmit={this.handleSubmit}>
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

export default BookingForm;
