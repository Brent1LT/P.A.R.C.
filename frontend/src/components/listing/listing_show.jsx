import React from 'react';
import BookingFormContainer from '../bookings/booking_form_container';
import "react-dates/initialize";
import MapContainer from '../map/map_container';
const rideOSKey = require('../../config/fe_keys_dev').rideOSKey;

class ListingShow extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      currentLat: 37.7987788,
      currentLong: -122.40142789999999
    };

  }
  componentDidMount() {
    this.props.fetchListing(this.props.listingId);
    let that = this;
    navigator.geolocation.getCurrentPosition(position => {
      let currentLat = position.coords.latitude;
      let currentLong = position.coords.longitude;
      that.setState({currentLat, currentLong});
    });
  }

  componentDidUpdate(){
    if(!this.props.listing) return null;
    
    let that = this;
    return fetch("https://api.rideos.ai/path/v2/GetPath", {
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": rideOSKey
      },
      method: "post",
      body: JSON.stringify({
        waypoints: [
          {
            position: {
              latitude: that.state.currentLat,
              longitude: that.state.currentLong
            },
            heading: 120
          },
          {
            position: {
              latitude: that.props.listing.lat,
              longitude: that.props.listing.lng
            }
          }
        ],
        geometryFormat: "LINESTRING"
      })
    })
      .then(res => res.json())
      .then(response => console.log(response));
  }

  render() {
    if (this.props.listing === undefined) {
      return null;
    }
    return(
      <div className="listing-show">
        <div className='left-info-container'>
          <img alt="" className='parking-images' src={this.props.listing.photo} />
          <div className='show-info'>
            <div className='show-listing-flex'>
                <div className='parking-info'>
                  <BookingFormContainer history={this.props.history} listing={this.props.listing} />
                  <div className='address-info'>{this.props.listing.street}</div>
                  <div className='address-info also'>{this.props.listing.city}</div>
                  <div className='address-info2'>{this.props.listing.state} {this.props.listing.zip}</div>
                  <div className='graybar'></div>
                  <div className='info-headings'>Description: <p>{this.props.listing.description}</p> </div>
                  <div className='graybar'></div>
                  <div className='info-headings'>Flat Rate of: ${this.props.listing.price}</div>
                  <div className='graybar'></div>
                </div>
                <div className="gif-container">
                  <div className='gif-title'>No need to rush when your parking is secured</div>
                  <div className='showpage-gif'></div>
                </div>
            </div>
          </div>
        </div>
        <MapContainer
          listings={this.props.listing}
          lat={this.props.listing.lat}
          lng={this.props.listing.lng}
          indexList={[this.props.listing]}
        />
      </div>
    );
  };
};

export default ListingShow;
