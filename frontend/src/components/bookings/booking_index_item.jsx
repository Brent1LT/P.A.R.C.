import React, { Component } from 'react';

class BookingIndexItem extends Component {
  constructor(props) {
    super(props);
    const year = {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December"
    };
    // console.log(this.props.booking.startDate);
    // console.log(this.props.booking.startDate.getDay());

    // this.state = {
    //   startDay: this.props.booking.startDate.getDay(),
    //   startMonth: this.props.booking.startDate.getMonth(),
    //   startYear: year[this.props.booking.startDate.getYear()],

    //   endDay: this.props.booking.startDate.getDay(),
    //   endMonth: this.props.booking.startDate.getMonth(),
    //   endYear: year[this.props.booking.startDate.getYear()],
    // };

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleVisitClick = this.handleVisitClick.bind(this);
  }

  handleDeleteClick(e) {
    e.preventDefault();
    this.props.deleteBooking(this.props.booking._id)
    .then(() => {
      this.props.history.push('/listings');
    });
  }

  handleVisitClick(e) {
    this.props.history.push(`/listings/${this.props.listing._id}`)
  }

  render() {
    if (!this.props.listing) {
      return null;
    }
    return (
      <div key={this.props.key} className="booking-index-item">
        {/* ADD A SRC FOR THIS IMG */}
        {/* USE THE ATTACHED LISTING IMG */}
        <img className='booking-photo' alt="" src={this.props.listing.photo} />
        <div className='booking-index-info'>
          <div className='left-info'>
            <div className='capitalizing'>{this.props.listing.street}</div>
            <div className='capitalizing'>{this.props.listing.city}</div>
            <div className='uppercasing'>{`${this.props.listing.state} ${this.props.listing.zip}`}</div>
          </div>
          <div className='right-info'>
            <div className='flexing'>
              <h3>From: </h3><div className='enddate'>{this.props.booking.startDate.slice(0, 10)}</div>
            </div>
            <div className='flexing'>
                <h3>To : </h3> <div>{this.props.booking.endDate.slice(0, 10)}</div>
            </div>
            <div className='flexing'>
              <h3 className='capitalizing'>Cost: </h3> <div>{this.props.listing.price}</div> 
            </div>
          </div>
        </div>
        <button className='delete-booking' onClick={this.handleDeleteClick}>Delete Booking</button>
        <button className='delete-booking' onClick={this.handleVisitClick}>Visit Booking</button>
      </div>
    );
  };
};

export default BookingIndexItem;
