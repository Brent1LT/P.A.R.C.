import React, { Component } from 'react';
import BookingIndexItem from './booking_index_item';

class BookingIndex extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.fetchAllUserBookings(this.props.currentUser);
  };

  render() {
    if (this.props.bookings === undefined) {
      return null;
      // can add little loading screen here
    };
    const bookingsArray = Object.values(this.props.bookings);

    return (
      <div className="booking-index">
        {bookingsArray.map((booking) => {
          return (
            <BookingIndexItem
              listing={this.props.listing}
              booking={booking}
              key={booking.id}
              deleteBooking={this.props.deleteBooking}
            />
          )
        })}
      </div>
    );
  };
};

export default BookingIndex;
