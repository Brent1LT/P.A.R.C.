import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Pin from '../pin/pin';
const frontendKeys = require("../../config/frontend_keys").mapApiKey;

class ParcMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        // These default LAT & LNG coords are what the map centers on
        latitude: this.props.lat,
        longitude: this.props.lng,
        height: '100vh',
        width: '65vw',
        zoom: 13.25,
      },
    };

    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  componentDidMount() {
    if (this.props.listings.length !== 1) {
      this.props.fetchAllListings();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.lat !== this.props.lat ||
        prevProps.lng !== this.props.lng) {
          this.setState(oldState => ({
            viewport: {
              ...oldState.viewport,
              latitude: this.props.lat,
              longitude: this.props.lng
            }
          })
        );
    }
  }

  onMarkerClick(listing) {
    let test = document.getElementById(listing._id);
    if(test === null){
      //in case not on listing index
      return;
    }
    this.smoothScroll(test)
  }

  smoothScroll(target) {
    let scrollContainer = target;
    do { //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop === 0);

    let targetY = 0;
    do { //find the top of target relatively to the container
      if (target === scrollContainer) break;
      targetY += target.offsetTop;
    } while (target === target.offsetParent);

    const scroll = (c, a, b, i) => {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function () { scroll(c, a, b, i); }, 20);
    };
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
  }

  render() {
    if (this.props.listings.length === 0) {
      return (null);
    }

    const { viewport } = this.state;

    const mapper = this.props.indexList || this.props.listings

    const markers = mapper.map((listing) => {
      return (
        <div onClick={() => this.onMarkerClick(listing)}>
          <Marker
            className="map-marker"
            latitude={listing.lat}
            longitude={listing.lng}
            captureClick={false}
            captureDoubleClick={false}
            captureDrag={false}
          >
            <Pin />
          </Marker>
        </div>
      );
    });


    return (
      <div className="map-container">
        <ReactMapGL
          {...viewport}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxApiAccessToken={frontendKeys}
          onViewportChange={(viewport) => this.setState({viewport})}
        >
          {markers}
        </ReactMapGL>
      </div>
    );
  };
}

export default ParcMap;
