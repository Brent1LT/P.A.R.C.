import React from 'react';
import BookingFormContainer from '../bookings/booking_form_container';
import "react-dates/initialize";
import MapContainer from '../map/map_container';

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
        <div>
        <img alt="" className='parking-images' src={this.props.listing.photo} />
        <div className='show-info'>
          <div className='show-listing-flex'>
              <div className='parking-info'>
                <div>{this.props.listing.street}, {this.props.listing.city}</div>
                <div>{this.props.listing.state} {this.props.listing.zip}</div>
                <div>Description: </div>
                <div>{this.props.listing.description}</div>
                <div>Flat Rate of: ${this.props.listing.price}</div>
                <div></div>
              </div>
            </div>
            <div className='booking-form-container'>
          </div>
          <BookingFormContainer history={ this.props.history } listing={this.props.listing}/>
        </div>
        </div>
        <div className='map-div'>
          <MapContainer listings={this.props.listing} />
        </div>
      </div>
    );
  };
};

export default ListingShow;
