import React, { Component } from 'react';
import { InfoWindow } from 'google-maps-react';

class InfoWindowItem extends Component {
  render() {
    return (
      <InfoWindow
        marker={this.props.marker}
        visible={this.props.visible}
      >
        <p>
          {this.props.listing.street}<br />
          {this.props.listing.city}, {this.props.listing.state} {this.props.listing.zip}<br />
        </p>
      </InfoWindow>
    );
  };
};

export default InfoWindowItem;
