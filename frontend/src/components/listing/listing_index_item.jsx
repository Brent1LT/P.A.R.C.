import React from 'react';
import {Link} from 'react-router-dom';

class ListingIndexItem extends React.Component{
  render() {
    return(
      <Link to={`/listings/${this.props.listing.id}`}>
        <div>
          <img src="https://images.vexels.com/media/users/3/128399/isolated/lists/4c21120637e7ad87ca7d800c3d24eb21-parking-round-service-icon.png" alt=""/>
          <div>{this.props.listing.street}</div>
          <div>{this.props.listing.city}*{this.props.listing.state}</div>
          <div>{this.props.listing.description}</div>
          <div>{this.props.listing.description}</div>
        </div>
      </Link>
    )
  };
};

export default ListingIndexItem;
