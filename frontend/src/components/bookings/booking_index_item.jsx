import React, { Component } from 'react';

class BookingIndexItem extends Component {
  constructor(props) {
    super(props);
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
        <img src="" />
        <h3>Booked Listing</h3>
        <div>{this.props.listing.address.street}</div>
        <h3>Start Date</h3>
        <div>{this.props.booking.startDate}</div>
        <h3>End Date</h3>
        <div>{this.props.booking.endDate}</div>
        <h3>Cost per Day</h3>
        <div>{this.props.listing.price}</div>
        <button onClick={this.handleClick}>Add a delete action here</button>
      </div>
    );
  };
};

export default BookingIndexItem;
