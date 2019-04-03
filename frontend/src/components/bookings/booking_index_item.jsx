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

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.deleteBooking(this.props.booking._id)
    .then(() => {
      this.props.history.push('/listings');
    });
  }

  render() {
    if (!this.props.listing) {
      return null;
    }

    return (
      <div key={this.props.key} className="booking-index-item">
        {/* ADD A SRC FOR THIS IMG */}
        {/* USE THE ATTACHED LISTING IMG */}
        <img alt="" src={this.props.listing.photo} />
        <h3>Booked Listing</h3>
        <div>{this.props.listing.street}</div>
        {/* <h3>Start Date: {this.state.startMonth} {this.state.startDay} {this.state.startYear}</h3> */}
        <h3>End Date: {this.props.booking.endDate}</h3>
        <h3>Cost per Day</h3>
        <div>{this.props.listing.price}</div>
        <button onClick={this.handleClick}>Delete Booking</button>
      </div>
    );
  };
};

export default BookingIndexItem;
