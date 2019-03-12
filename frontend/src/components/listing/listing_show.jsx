import React from 'react'
import GoogleMapContainer from '../map/map';
import BookingFormContainer from '../bookings/booking_form_container';

class ListingShow extends React.Component{
  constructor(props){
    super(props)
  };

  componentDidMount(){
    this.props.fetchListing();
  };

  render(){
    if(this.props.listing === undefined){
      return null;
    }
    return(
      <div>
          <GoogleMapContainer />
          <div>
            <h2>{this.props.listing.street} {this.props.listing.city}</h2>
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
