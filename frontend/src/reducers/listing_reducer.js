import {
    RECEIVE_LISTING,
    RECEIVE_ALL_LISTINGS,
    DELETE_LISTING
} from '../actions/listing_action';


const listingReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
    switch(action.type){
        case RECEIVE_LISTING:
            return Object.assign({}, state, {[action.listing._id]: action.listing});
        case RECEIVE_ALL_LISTINGS:
            let obj = {};
            action.listings.map(listing => {
                obj[listing._id] = listing;
            });
            return obj;
        case DELETE_LISTING:
            newState = Object.assign({}, state);
            delete newState[action.listing.id];
            return newState;
        default:
            return state;
    }
};

export default listingReducer;
