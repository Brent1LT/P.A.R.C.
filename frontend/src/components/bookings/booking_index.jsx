import React, { Component } from 'react';
import BookingIndexItem from './booking_index_item';

class BookingIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchListings().then( () =>
    this.props.fetchAllUserBookings(this.props.currentUser)
    );
  }

  render() {
    if (this.props.bookings.length === 0) {
      return null;
      // can add little loading screen here
    }

    const bookingsArray = Object.values(this.props.bookings);
    return (
      <div className="booking-index">
        {bookingsArray.map((booking) => {
          return (
            <div key={booking._id}>

            <BookingIndexItem
              listing={this.props.listings[booking.listing]}
              booking={booking}
              deleteBooking={this.props.deleteBooking}
              history={this.props.history}
            />
            </div>
          )
        })}
      </div>
    );
  };
};

export default BookingIndex;
