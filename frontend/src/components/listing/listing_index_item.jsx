import React from 'react';
import {Link} from 'react-router-dom';

class ListingIndexItem extends React.Component{
  render() {
    return(
        <div id={this.props.listing._id} className="listing-item" >
          <img className='parking-logo' src={this.props.listing.photo} alt={this.props.listing.description} />
          <div className="listing-info">
            <div className='location-info'>{this.props.listing.street}</div>
            <div className='location-info'>{this.props.listing.city}, {this.props.listing.state}</div>
            <div className='graybar'></div>
            <div className='info-headings'>Description: <p>{this.props.listing.description}</p> </div>
            {/* <div className='description-listing'>Description: {this.props.listing.description}</div> */}
            <div className='graybar'></div>
            <Link id='go-to-parking' to={`/listings/${this.props.listing._id}`}>Go to this parking!</Link>
          </div>
        </div>
    )
  };
};

export default ListingIndexItem;
