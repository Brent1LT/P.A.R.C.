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
    this.markers = [{
      id: 1,
        user: 'Brent',
          description: 'Lorem ipsum stuffsum flotsam jetsam',
            lng: 37.759536,
              lat: -122.4145126,
                street: '123 Broadway St.',
                  city: 'SSF',
                    state: 'CA',
                      zip: 94105,
                        price: 15,
      },
    {
      id: 2,
        user: 'Sam',
          description: 'Lorem ipsum stuffsum flotsam jetsam',
            lng: 37.767721,
              lat: -122.419530,
                street: '345 Bueller St.',
                  city: 'SSF',
                    state: 'CA',
                      zip: 94105,
                        price: 15,
      }
    ];
    // markers.map(marker => {
    //   return (
    //     <Map
    //       item
    //       xs={12}
    //       style={style}
    //       google={this.props.google}
    //       onClick={this.onMapClick}
    //       zoom={14}
    //       initialCenter={{ lat: 37.7565536, lng: -122.4145126 }}
    //     >
    //       <Marker
    //         onClick={this.onMarkerClick}
    //         title={"Bueller's Orange Garage"}
    //         position={{ lat: marker.lat, lng: marker.lng}}
    //         name={"Bueller's Orange Garage"}
    //       />
    //       <InfoWindow
    //         marker={this.state.activeMarker}
    //         visible={this.state.showingInfoWindow}
    //       >
    //         <p>
    //           123 Broadway Street<br />
    //           SF, CA 12345<br />
    //           800-555-1234
    //       </p>
    //       </InfoWindow>
    //     </Map>
    //   );

    // })
    // debugger
    return(
      <div>
      { this.markers.map(marker => {
          return (
            <Map
              item
              xs={12}
              style={style}
              google={this.props.google}
              onClick={this.onMapClick}
              zoom={14}
              initialCenter={{ lat: 37.7565536, lng: -122.4145126 }}
            >
              <Marker
                onClick={this.onMarkerClick}
                title={"Bueller's Orange Garage"}
                position={{ lat: marker.lng, lng: marker}}
                name={"Bueller's Orange Garage"}
              />
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
              >
                <p>
                  123 Broadway Street<br />
                  SF, CA 12345<br />
                  800-555-1234
          </p>
              </InfoWindow>
            </Map>
          );

        })}
      </div>
    )
    // return (
    //   <Map
    //     item
    //     xs={12}
    //     style={style}
    //     google={this.props.google}
    //     onClick={this.onMapClick}
    //     zoom={14}
    //     initialCenter={ {lat: 37.7565536, lng: -122.4145126} }
    //   >
    //     <Marker
    //       onClick={this.onMarkerClick}
    //       title={"Bueller's Orange Garage"}
    //       position={ {lat: 37.756536, lng: -122.4145126} }
    //       name={"Bueller's Orange Garage"}
    //     />
    //     <InfoWindow
    //       marker={this.state.activeMarker}
    //       visible={this.state.showingInfoWindow}
    //     >
    //       <p>
    //         123 Broadway Street<br />
    //         SF, CA 12345<br />
    //         800-555-1234
    //       </p>
    //     </InfoWindow>
    //   </Map>
    // );
  };
};

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAPjYkDq0-iiCd6W5-qCw46J-r0EW39L1U')
})(GoogleMap);
