import React from 'react';
import ListingIndexItem from './listing_index_item';
import GoogleMapContainer from '../map/map_container';
import {Link} from 'react-router-dom';


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
      'zIndex': '0',
      'position': 'sticky',
    };

    return(
      <>
      <div className="listing-index">
        <h1>Available Parking Spots</h1>
              {/* <GoogleMapContainer listings={listingsArray} style={listingMapStyle} /> */}
        <div>
          <div className="all-listings">
            <div>
              {listingsArray.map(listing => {
                return <ListingIndexItem href='' listing={listing} key={listing.id} />
              })}
            </div>
          </div>
        </div>
      </div>

{/* //make sure to move this */}

      </>
    )
  }
};

export default ListingIndex;
