import React, { Component } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

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

  handleSubmit(e) {
    e.preventDefault();
    const booking = {
      user: this.state.user,
      listing: this.props.listingId,
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
    return (
      <div className="booking-form" style={{width: 300 +'px', height: 300 +'px'}} >
        <h1>{this.props.formType}</h1>
        <form onSubmit={this.handleSubmit}>
          <DateRangePicker
            startDate={this.state.startDate}
            startDateId="start-date-field"
            startDatePlaceholderText="Start Date"
            endDate={this.state.endDate}
            endDateId="end-date-field"
            endDatePlaceholderText="End Date"
            onDatesChange={({startDate, endDate}) => this.setState({ startDate, endDate })}
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
