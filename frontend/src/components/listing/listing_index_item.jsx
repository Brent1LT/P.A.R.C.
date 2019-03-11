import React from 'react'

class ListingIndexItem extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div>
                <div>
                    <img src="https://images.vexels.com/media/users/3/128399/isolated/lists/4c21120637e7ad87ca7d800c3d24eb21-parking-round-service-icon.png" alt=""/>
                    <div>{this.props.listing.address.street}</div>
                    <div>{this.props.listing.address.city}*{this.props.listing.address.staet}</div>
                    <div>{this.props.listing.address.description}</div>
                    <div>{this.props.listing.address.description}</div>
                </div>
            </div>
        )
    }
}

export default ListingIndexItem 