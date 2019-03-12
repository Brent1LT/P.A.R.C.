import React from 'react';
import GoogleMapContainer from '../map/map';
import BookingFormContainer from '../bookings/booking_form_container';

class ListingShow extends React.Component{
  constructor(props){
    super(props);
  };

  componentDidMount(){
    this.props.fetchListing();
  };

  render(){
    if(this.props.listing === undefined){
      return null;
    }
    return(
      <div className="listing-show">
          <h2>{this.props.listing.address.street} {this.props.listing.address.city}</h2>
          <GoogleMapContainer listings={this.props.listing} />
          <div>
            <div>Description
              <div>{this.props.listing.description}</div>
            </div>
            <BookingFormContainer />
          </div>
          <div>IMAGE BELOW THIS</div>
          <img src="" alt=""/>
      </div>
    );
  };
};

export default ListingShow;
