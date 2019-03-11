import {RECEIVE_LISTING, RECEIVE_ALL_LISTINGS, DELETE_LISTING} from '../actions/listing_action';


const listingReducer = (state = {}, action) => {
    Object.freeze(state);
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
    }
}

export default listingReducer 