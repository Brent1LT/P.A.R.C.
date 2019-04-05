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

  componentDidUpdate(oldProps) {
    if (oldProps.search !== this.props.search) {
      this.filterListings();
    }
  }

  filterListings() {
    this.geocodeRequest(this.props.search).then(response => {
      this.setState({
        lat: response.lat,
        lng: response.lng
      });
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

    if(this.state.listing === null){
      return null;
    }

    const listingsArray = Object.values(this.props.listings); //for mapping purposes
    let listings; //for display purposes
    if(this.state.lat !== 37.7599043 || this.state.lng !== -122.4256016){
      listings = [];
      listingsArray.map(listing => {
        if ((listing.lat <= this.state.lat + .0055 && listing.lat >= this.state.lat - .0055) &&
          (listing.lng <= this.state.lng + .0083 && listing.lng >= this.state.lng - .0083)) {
          listings.push(listing);
        }
      });
    }
    if (!listings || listings.length === 0) listings = listingsArray;

    return (
      <div>
        <div className='index-search'>
          <SearchBarContainer />
        </div>
        <div className='index-main-container'>
          <div id='goHere' className="all-listings">
            {/* <div className='prevent-overflow'> */}
              {listings.map(listing => {
                return <ListingIndexItem listing={listing} />
              })}
            {/* </div> */}
          </div>
          <div>
            <div className="listing-index">
              <div className='map-div'>
                <MapContainer
                  lat={this.state.lat}
                  lng={this.state.lng}
                  changeListing={this.changeListing}
                  indexList={listings}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
};

export default ListingIndex;
