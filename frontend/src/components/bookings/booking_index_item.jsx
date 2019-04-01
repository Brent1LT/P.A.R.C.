import React, { Component } from 'react';

class BookingIndexItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(e) {
    e.preventDefault();
    this.props.deleteBooking();
  };

  render() {
    return (
      <div className="booking-index-item">
        {/* ADD A SRC FOR THIS IMG */}
        {/* USE THE ATTACHED LISTING IMG */}
        <img alt="" src={this.props.listing.photo} />
        <h3>Booked Listing</h3>
        <div>{this.props.listing.street}</div>
        <h3>Start Date</h3>
        <div>{this.props.booking.startDate}</div>
        <h3>End Date</h3>
        <div>{this.props.booking.endDate}</div>
        <h3>Cost per Day</h3>
        <div>{this.props.listing.price}</div>
        <button onClick={this.handleClick}>Delete Booking</button>
      </div>
    );
  };
};

export default BookingIndexItem;
