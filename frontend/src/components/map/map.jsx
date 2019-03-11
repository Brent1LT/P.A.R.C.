import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

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

  render() {
    const style = {
      width: '65vw',
      height: '45vh',
      'marginLeft': 'auto',
      'marginRight': 'auto',
    };

    // Change this return setup to use a .map ieteration over the listings
    // Then we can use this component dynamically for splash, index & show
    return (
      <Map
        item
        xs={12}
        style={style}
        google={this.props.google}
        onClick={this.onMapClick}
        zoom={14}
        initialCenter={ {lat: 37.7565536, lng: -122.4145126} }
      >
        <Marker
          onClick={this.onMarkerClick}
          title={"Bueller's Orange Garage"}
          position={ {lat: 37.7565536, lng: -122.4145126} }
          name={"Bueller's Orange Garage"}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          123 Broadway Street, SF, CA 12345 <br />
          800-555-1234
        </InfoWindow>
      </Map>
    );
  };
};

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBYavEW50q1upq8t8CZ232YwGY-OfyjSBY')
})(GoogleMap);
