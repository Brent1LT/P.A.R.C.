import React from 'react';
import ListingIndexItem from './listing_index_item';
import GoogleMapContainer from '../map/map_container';

class ListingIndex extends React.Component{
  constructor(props){
    super(props);
  };

  componentDidMount(){
    this.props.fetchListings();
  };

  render(){
    if (this.props.listings === undefined) {
      return null;
      // can add little loading screen here
    }
    const listingsArray = Object.values(this.props.listings);

    return(
      <div className="listing-index">
        <h2>Listing Index Page</h2>
        <GoogleMapContainer listings={this.props.listings} />
        <div>
          <div>
            {listingsArray.map(listing => {
              return <ListingIndexItem listing={listing} key={listing.id}/>
            })}
          </div>
        </div>
      </div>
    )
  }
};

export default ListingIndex;
