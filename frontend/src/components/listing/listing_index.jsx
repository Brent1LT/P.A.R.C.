import React from 'react';
import ListingIndexItem from './listing_index_item';
import GoogleMapContainer from '../map/map_container';
import {Link} from 'react-router-dom';


class ListingIndex extends React.Component{
  componentDidMount(){
    this.props.fetchListings();
  }

  render(){
    if (Object.keys(this.props.listings).length === 0) {
      return null;
      // can add little loading screen here
    }
    const listingsArray = Object.values(this.props.listings);
    const listingMapStyle = {
      width: '40%',
      height: '80%',
      'marginLeft': '0',
      'marginRight': '6%',
      'zIndex': '0',
    };

    return(
      <>
      <div className="listing-index">
        {/* <h1>Available Parking Spots</h1> */}
          <div className='map-div'>
            <GoogleMapContainer  listings={listingsArray} style={listingMapStyle} />
          </div>
      </div>
          <div className="all-listings">
            {/* {listingsArray.map(listing => {
              return <ListingIndexItem listing={listing} key={listing.id} />
            })} */}
            <ListingIndexItem listing={listingsArray[0]} /> 
          </div>
        
    </>
    )
  }
};

export default ListingIndex;
