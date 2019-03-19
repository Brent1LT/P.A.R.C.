import React, { Component } from 'react';

class BookingShow extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };

  componentDidMount() {
    this.props.fetchBooking(this.props.id);
  };

  handleClick(e) {
    e.preventDefault();
    this.props.deleteBooking(this.props.id);
  };

  render() {
    if (this.props.booking === undefined) return null;

    return (
      <div className="booking-show">
        <img src={this.props.listing.photo} />
        <h2>Start Date</h2>
        <div>{this.props.booking.startDate}</div>
        <h2>End Date</h2>
        <div>{this.props.booking.endDate}</div>
        <button onClick={this.handleClick}>Add a delete action here</button>
      </div>
    );
  };
};

export default BookingShow;
