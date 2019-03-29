import React from 'react';
import ListingIndexItem from './listing_index_item';
import GoogleMapContainer from '../map/map_container';
import {Link} from 'react-router-dom';


class ListingIndex extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      listing: null
    };
  }

  changeListing(listing) {
    this.setState({listing});
  }
  componentDidMount(){
    this.props.fetchListings();
  }

  render(){
    if (Object.keys(this.props.listings).length === 0) {
      return null;
      // can add little loading screen here
    }
    const listingsArray = Object.values(this.props.listings);
    if(this.state.listing === null){
      this.setState({listing: listingsArray[0]});
      return null;
    }
    const listingMapStyle = {
      width: '80%',
      height: '80%',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'zIndex': '0',
    };

    return(
      <>
      <div className="listing-index">
        {/* <h1>Available Parking Spots</h1> */}
          <div className='map-div'>
            <GoogleMapContainer changeListing={this.changeListing} listings={listingsArray} style={listingMapStyle} />
          </div>
      </div>
          <div className="all-listings">
            {/* {listingsArray.map(listing => {
              return <ListingIndexItem listing={listing} key={listing.id} />
            })} */}
            <ListingIndexItem listing={this.state.listing} /> 
          </div>
        
    </>
    )
  }
};

export default ListingIndex;
