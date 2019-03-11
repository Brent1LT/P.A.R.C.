import React from 'react';
import ListingIndexItem from './listing_index_item'


class ListingIndex extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        if (this.props.listings === undefined) {
            return null;
            //can add little loading screen here
        }
        let listingsArray = Object.values(this.props.listings)

        return(
            <div>
                <h2>Listing Index Page</h2>
                <div>
                    <div>
                        {listingsArray.map(listing => {
                            return <ListingIndexItem listing={listing} key={listing.id}/>
                        })}
                    </div>
                    <div>MAP GOES HERE</div>
                </div>
            </div>
        )
    }
}

export default ListingIndex