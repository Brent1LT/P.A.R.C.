import * as ListingApiUtil from '../util/listing_api_util'

export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const RECEIVE_ALL_LISTINGS = 'RECEIVE_ALL_LISTINGS';
export const DELETE_LISTING = 'DELETE_LISTING'; 


const receiveListing = listing => {
    return({
        type: RECEIVE_LISTING,
        listing
    })
}

const receiveAllListings = listings => {
    return({
        type: RECEIVE_ALL_LISTINGS,
        listings
    })
}

const deleteListing = (listing) => {
    return({
        type: DELETE_LISTING,
        listing
    })
}


//thunk action creators

export const createListing = listing => dispatch => {
    //listing above             ^      is the listing the user creates
    ListingApiUtil.createListing(listing).then(listing => {
        // same listing just sending to backend
        dispatch(receiveListing(listing))
    })
}

export const fetchListing = id => dispatch => {
    //supply an id for the axios call to check for
    ListingApiUtil.fetchListing(id).then(listing => {
        // listing is what is supplied by the backend 
        dispatch(receiveListing(listing))
    })
}

export const fetchListings = () => dispatch => {
    ListingApiUtil.fetchAllListings().then(listings => {
        //listings is what our backend is returning
        dispatch(receiveAllListings(listings))
    })
}

export const deleteListing = (id) => dispatch => {
    ListingApiUtil.deleteListing(id).then( listing => {
        //backend will delete the listing
        dispatch(deleteListing(listing))
    })
}

