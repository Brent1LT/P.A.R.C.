import React, { Component } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

class BookingForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.currentUser,
      startDate: null,
      endDate: null,
      offMarket: false,
      currentFormComponent: null,
      focusedInput: null,
    };
  };

  render() {
    return (
      <div className="booking-form" style={{width: 300 +'px', height: 300 +'px'}} >
        <h1>Create a Booking Here</h1>
        <form>
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
        </form>
      </div>
    );
  };
};

export default BookingForm;
