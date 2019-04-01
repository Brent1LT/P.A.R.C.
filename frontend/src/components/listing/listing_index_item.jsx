import React from 'react';
import {Link} from 'react-router-dom';

class ListingIndexItem extends React.Component{
  render() { 
    return(
        <div className="listing-item" >
          <img className='parking-logo' src={this.props.listing.photo}/>
          <div className="listing-info">
            <h3>Location: </h3>
            <div className='location-info'>{this.props.listing.street}</div>
            <div className='location-info'>{this.props.listing.city}, {this.props.listing.state}</div>
            <div className='description-listing'>Description: {this.props.listing.description}</div>
            <Link id='go-to-parking' to={`/listings/${this.props.listing._id}`}>Go to this parking!</Link>
          </div>
        </div>

    )
  }; 
};

export default ListingIndexItem;
