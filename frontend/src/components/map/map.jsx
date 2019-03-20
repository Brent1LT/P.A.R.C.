import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import frontendKeys from '../../config/frontend_keys';
// import InfoWindowItem from './info_window_item';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  };

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  onMapClick(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  componentDidMount(){
    this.props.fetchAllListings();
  }

  render() {
    // debugger;
    if (this.props.listings.length === 0) {
      return (null);
    }

    const defaultStyle = {
      width: '65vw',
      height: '45vh',
      'marginLeft': 'auto',
      'marginRight': 'auto',
    };

    const markers = this.props.listings.map((listing) => {
      const activeMarker = this.state.activeMarker;
      const showingInfoWindow = this.state.showingInfoWindow;
      return (
        <Marker
          key={listing.id}
          onClick={this.onMarkerClick}
          title={listing.street}
          position={{lat: listing.lat, lng: listing.lng}}
          name={listing.street}
        />
      );
    });
    const infoWindows = this.props.listings.map((listing) => {
      return (
        <InfoWindow
          key={listing.id}
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <p>
            {listing.street}<br />
            {listing.city}, {listing.state} {listing.zip}
          </p>
        </InfoWindow>
      );
    });

    const zipped = [];
    markers.forEach((m, i) => {
      zipped.push(m);
      zipped.push(infoWindows[i]);
    });

    const currentStyle = this.props.style ? this.props.style : defaultStyle;

    return (
      <div className="map-container">
        <Map
          item
          xs={12}
          style={currentStyle}
          google={this.props.google}
          onClick={this.onMapClick}
          zoom={14}
          initialCenter={{lat: 37.7599043, lng: -122.4256016}}
          >
          {zipped}
        </Map>
      </div>
    );

  };
};

export default GoogleApiWrapper({
  apiKey: (frontendKeys.googleMapApiKey)
})(GoogleMap);

// <Marker
//   onClick={this.onMarkerClick}
//   title={"Bueller's Orange Garage"}
//   position={ {lat: 37.7565536, lng: -122.4145126} }
//   name={"Bueller's Orange Garage"}
// />
// <InfoWindow
//   marker={this.state.activeMarker}
//   visible={this.state.showingInfoWindow}
// >
//   <p>
//     123 Broadway Street<br />
//     SF, CA 12345<br />
//     800-555-1234
//   </p>
// </InfoWindow>

// <InfoWindow
//   marker={this.state.activeMarker}
//   visible={this.props.visible}
// >
//   <p>
//     {listing.street}<br />
//     {listing.city}, {listing.state} {listing.zip}<br />
//     1-800-555-1234
//   </p>
// </InfoWindow>
