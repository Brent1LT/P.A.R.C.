import React from 'react';
import ListingIndexItem from './listing_index_item';
import MapContainer from '../map/map_container';
import SearchBarContainer from '../navbar/search_container';

class ListingIndex extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      lat: 37.7599043,
      lng: -122.4256016,
      listing: null,
      search: null,
    };
    // debugger
    if (this.props.search) {
      this.filterListings();
    }

    this.geocodeRequest = this.geocodeRequest.bind(this);
    this.filterListings = this.filterListings.bind(this);
    this.changeListing = this.changeListing.bind(this);
  }

  changeListing(id) {
    let newListing = this.props.listings[id];
    this.setState({listing: newListing});
  }

  componentDidMount(){
    this.props.fetchListings().then(action =>{
      this.setState({ listing: action.listings[0] });
    });
  }

  filterListings() {
    this.geocodeRequest(this.props.search).then(response => {
      this.lat = response.lat;
      this.setState({
        lat: response.lat,
        lng: response.lng
      });
      this.state.lng = response.lng;
    }).catch(err => {
      this.setState({ error: err });
    });
  }

  geocodeRequest(address) {
    return fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAPjYkDq0-iiCd6W5-qCw46J-r0EW39L1U`,
      {
        method: "post",
      }
    ).then(res => res.json())
      .then(response => {
        return response.results[0].geometry.location;
      }).catch(err => {
        this.setState({ error: err });
      });
  }





  render() {
    if (Object.keys(this.props.listings).length === 0) {
      return null;
    }

    const listingsArray = Object.values(this.props.listings);
    if(this.state.listing === null){
      return null;
    }

    const listingMapStyle = {
      width: '80%',
      height: '80%',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'zIndex': '0',
    };

    return (
      <div>
        <div className='index-search'>
          <SearchBarContainer />
        </div>
        <div className='index-main-container'>
          <div id='goHere' className="all-listings">
            <div>
              {listingsArray.map(listing => {
                return <ListingIndexItem listing={listing} />
              })}

        <div>
          <div className="listing-index">

            <div className='map-div'>
              <MapContainer
                lat={this.state.lat}
                lng={this.state.lng}
                changeListing={this.changeListing}
                listings={listingsArray}
                style={listingMapStyle}
              />

            </div>
          </div>
          <div>
            <div className="listing-index">
              <div className='map-div'>
                <MapContainer changeListing={this.changeListing} listings={listingsArray} />
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  };
};

export default ListingIndex;
