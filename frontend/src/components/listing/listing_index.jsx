import React from 'react';
import ListingIndexItem from './listing_index_item';
import GoogleMapContainer from '../map/map_container';

class ListingIndex extends React.Component{
  componentDidMount(){
    this.props.fetchListings();
  }

  render(){
    if (this.props.listings === undefined) {
      return null;
      // can add little loading screen here
    }
    const listingsArray = Object.values(this.props.listings);
    const listingMapStyle = {
      width: '40%',
      height: '100%',
      'marginLeft': 'auto',
      'marginRight': '6%',
    };

    return(
      <div className="listing-index">
        <h1>Available Parking Spots</h1>
        <div>
          <GoogleMapContainer
            listings={listingsArray}
            style={listingMapStyle}
          />
          <div className="all-listings">
            <div>
              {listingsArray.map(listing => {
                return <ListingIndexItem listing={listing} key={listing.id}/>
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default ListingIndex;
