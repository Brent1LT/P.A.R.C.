import React from 'react';
import GoogleMapContainer from '../map/map';
import BookingFormContainer from '../bookings/booking_form_container';
import "react-dates/initialize";

class ListingShow extends React.Component{
  componentDidMount(){
    this.props.fetchListing(this.props.listingId);
  }

  render(){
    if(this.props.listing === undefined){
      return null;
    }
    const listingMapStyle = {
      width: '40%',
      height: '60%',
      'marginLeft': 'auto',
      'marginRight': '6%',
      'zIndex': '0',
    };
    return(
      <div className="listing-show">
          {/* <GoogleMapContainer listings={[this.props.listing]} style={listingMapStyle} /> */}
          <div className='show-info'>
            <div className='show-listing-flex'>
              <img className='parking-images' src={this.props.listing.photo} />
              <div className='parking-info'>
              <h2>Wanna book this spot?</h2>
                <div>{this.props.listing.street}, {this.props.listing.city}</div>
                <div>{this.props.listing.state} {this.props.listing.zip} </div>
                <div>Description: {this.props.listing.description}</div>
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
