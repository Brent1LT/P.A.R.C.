import React from 'react';
import BookingFormContainer from '../bookings/booking_form_container';
import "react-dates/initialize";

class ListingShow extends React.Component{
  componentDidMount() {
    this.props.fetchListing(this.props.listingId);
  }

  render() {
    if (this.props.listing === undefined) {
      return null;
    }

    return(
      <div className="listing-show">
        <div className='show-image-container'>
          <img alt="" className='parking-images' src={this.props.listing.photo} />
        </div>
        <div className='show-info'>
          <div className='show-listing-flex'>
            <div className='parking-info'>
            <h2>Take a look at this!</h2>
              <div>{this.props.listing.street}, {this.props.listing.city}</div>
              <div>{this.props.listing.state} {this.props.listing.zip} </div>
              <div>Description: </div>
              <div>{this.props.listing.description}</div>
              <div>Flat Rate of: ${this.props.listing.price}</div>
              <div>
              </div>
            </div>
          </div>
        </div>
        <div className='booking-form-container'>
          <BookingFormContainer listing={this.props.listing}/>
        </div>
      </div>
    );
  };
};

export default ListingShow;
