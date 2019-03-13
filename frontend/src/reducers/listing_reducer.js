import {RECEIVE_LISTING, RECEIVE_ALL_LISTINGS, DELETE_LISTING} from '../actions/listing_action';


const listingReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

<<<<<<< HEAD
    switch(action.type){
        case RECEIVE_LISTING:
            return Object.assign({}, state, {[action.listing.data._id]: action.listing.data})
        case RECEIVE_ALL_LISTINGS:
            return action.listings;
        case DELETE_LISTING:
            newState = Object.assign({}, state);
            delete newState[action.listing.id];
            return newState;
        default:
            return state;
    }
}
=======
  switch(action.type){
    case RECEIVE_LISTING:
      return Object.assign({}, state, {[action.listing.id]: action.listing})
    case RECEIVE_ALL_LISTINGS:
      return action.listings
    case DELETE_LISTING:
      newState = Object.assign({}, state)
      delete newState[action.listing.id]
      return newState;
    default:
      return state;
  };
};
>>>>>>> f53706ae3f408d338a7a56044ddd08749d9f2caa

export default listingReducer;
