import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import frontendKeys from '../../config/frontend_keys';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: true,
      activeMarker: {},
      selectedPlace: {},
    };

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
    selectedPlace: props.title,
    activeMarker: marker,
    showingInfoWindow: true,
    });
  }

  onMapClick() {
    if (this.state.showingInfoWindow) {
      this.setState({
        selectedPlace: {},
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  }

  componentDidMount(){
    if(this.props.listings.length != 1){
      this.props.fetchAllListings();
    }
  }

  render() {
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
    // debugger

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
          { markers }
          { infoWindows }
        </Map>
      </div>
    );

  };
};

export default GoogleApiWrapper({
  apiKey: (frontendKeys.googleMapApiKey)
})(GoogleMap);