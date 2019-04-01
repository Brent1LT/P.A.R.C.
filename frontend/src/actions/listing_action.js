import * as ListingApiUtil from '../util/listing_api_util';

export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const RECEIVE_ALL_LISTINGS = 'RECEIVE_ALL_LISTINGS';
export const DELETE_LISTING = 'DELETE_LISTING';
// export const RECEIVE_LISTING_ERRORS = 'RECEIVE_LISTING_ERRORS';
export const CLEAR_LISTING_ERRORS = 'CLEAR_ERRORS';


const receiveListing = listing => {
  return({
    type: RECEIVE_LISTING,
    listing,
  });
};

const receiveAllListings = listings => {
  return({
    type: RECEIVE_ALL_LISTINGS,
    listings,
  });
};

const removeListing = (listing) => {
  return({
    type: DELETE_LISTING,
    listing,
  });
};

// const receiveListingErrors = errors => {
//   return({
//     type: RECEIVE_LISTING_ERRORS,
//     errors,
//   });
// };

export const clearListingErrors = () => {
  return({
    type: CLEAR_LISTING_ERRORS,
  });
};


//thunk action creators

export const createPhotoListing = listing => dispatch => {
  return ListingApiUtil.createPhotoListing(listing).then(listing => {
    return dispatch(receiveListing(listing));
  });
};

export const fetchListing = id => dispatch => {
  return (ListingApiUtil.fetchListing(id).then(
    listing => {
      return dispatch(receiveListing(listing));
    // errors => {
    //   dispatch(receiveListingErrors(errors))
    // }
  }));
};

export const fetchListings = () => dispatch => {
  return (ListingApiUtil.fetchAllListings().then(
    listings => {
      return dispatch(receiveAllListings(listings));
    // errors => {
    //   dispatch(receiveListingErrors(errors))
    // }
  }));
};

export const deleteListing = (id) => dispatch => {
  return (ListingApiUtil.deleteListing(id).then(
    listing => {
      return dispatch(removeListing(listing));
    // errors => {
    //   dispatch(receiveListingErrors(errors))
    // }
  }));
};
