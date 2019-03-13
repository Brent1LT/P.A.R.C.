import React, { Component } from 'react';
import { Marker } from 'google-maps-react';

class MarkerItem extends Component {
  render() {
    return (
      <Marker
        onClick={this.props.onMarkerClick}
        title={this.props.listing.street}
        position={{lat: this.props.listing.lat, lng: this.props.listing.lng}}
        name={this.props.listing.street}
      />
    );
  };
};

export default MarkerItem;
