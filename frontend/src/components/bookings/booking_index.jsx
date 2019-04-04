import React, { Component } from 'react';
import BookingIndexItem from './booking_index_item';

class BookingIndex extends Component {
  constructor(props){
    super(props)
    this.mostRecent = this.mostRecent.bind(this);
  }

  componentDidMount() {
    this.props.fetchListings().then( () =>
    this.props.fetchAllUserBookings(this.props.currentUser)
    );
  }

  mostRecent(bookingsArray){
    let results = [];
    let todayDay = new Date().getDay();
    let todayMonth = new Date().getMonth();
    // let todayYear = new Date().getFullYear();
    if (bookingsArray.length < 15) {
      return bookingsArray;
    }else{
      let count = 0;
      bookingsArray.map( (booking) => {
        if(parseInt(booking.startDate.slice(5,7)) === todayMonth+1){
          if((parseInt(booking.startDate.slice(8,10)) > todayDay) && count < 15){
            results.push(booking);
            count++;
          }
        }
      });
      return results;
    }
  }

  render() {
    if (this.props.bookings.length === 0) {
      return null;
      // can add little loading screen here
    }

    let bookingsArray = Object.values(this.props.bookings);
    bookingsArray = this.mostRecent(bookingsArray);


    return (
      <div className="booking-index">
        <h1 id='booking-main-img'><div class="stage">
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
        </div></h1>
        <div className='count-info'>
          <h2 className='month-bookings-title'>All your bookings for this month!</h2>
          
          <div className='flexing-booking'>
              {bookingsArray.map((booking) => {
                return (
                  <div className='each-booking' key={booking._id}>
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
        </div>
      </div>
    );
  };
};

export default BookingIndex;
