import React from 'react';
import ListingIndexItem from './listing_index_item';
import MapContainer from '../map/map_container';
import SearchBarContainer from '../navbar/search_container';

class ListingIndex extends React.Component{
  constructor(props) {
    super(props);
    this.geocodeRequest.bind(this);
    this.filterListings.bind(this);
    this.coordinates = { lat: 0, lng: 0 }
    this.center = { lat: 37.7599043, lng: -122.4256016 };
    this.state = {
      listing: null,
      search: null,
    };
    this.changeListing = this.changeListing.bind(this);
    if (this.props.search) {
      this.results = this.filterListings();
      this.results = [];
    }
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
      this.coordinates.lat = response.lat;
      this.coordinates.lng = response.lng;
      this.center.lat = response.lat;
      this.center.lng = response.lng;
    }).catch(err => {
      this.setState({ error: err })
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
        <div>
          <div className="listing-index">
            <div className='map-div'>
              <MapContainer changeListing={this.changeListing} listings={listingsArray} style={listingMapStyle} />
            </div>
          </div>
          <div id='goHere' className="all-listings">
            <ListingIndexItem listing={this.state.listing} />
          </div>
        </div>
        <div id='goHere' className="all-listings">
          <ListingIndexItem listing={this.state.listing} />
        </div>
      </div>
    )
  };
};

export default ListingIndex;
