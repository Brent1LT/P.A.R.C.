import React from 'react';
import {Link} from 'react-router-dom';

class ListingIndexItem extends React.Component{


  
  render() {
    
    return(
        <div className="listing-item" >
          <img className='parking-logo' src="https://images.vexels.com/media/users/3/128399/isolated/lists/4c21120637e7ad87ca7d800c3d24eb21-parking-round-service-icon.png" alt=""/>
          <div className="listing-info">
            <h3>Location:</h3>
            <div>{this.props.listing.street}</div>
            <div>{this.props.listing.city}*{this.props.listing.state}</div>
            <div className='description-listing'>Description: {this.props.listing.description}</div>
            <Link id='go-to-parking' to={`/listings/${this.props.listing._id}`}>Go to this parking!</Link>
          </div>
        </div>

    )
  }; 
};

export default ListingIndexItem;
