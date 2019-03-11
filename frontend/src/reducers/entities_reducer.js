import { combineReducers } from 'redux';
import listingReducer from '../reducers/listing_reducer'

export default combineReducers({
    listings: listingReducer
});