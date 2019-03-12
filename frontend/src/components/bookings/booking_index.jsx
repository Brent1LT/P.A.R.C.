import React, { Component } from 'react';
import BookingIndexItem from './booking_index_item';

class BookingIndex extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.fetchAllUserBookings();
  };

  render() {
    if (this.props.bookings === undefined) {
      return null;
      // can add little loading screen here
    };
    const bookingsArray = Object.value(this.props.bookings);

    return (
      <div className="booking-index">
        {bookingsArray.map((booking) => {
          return (
            <BookingIndexItem
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
