import { combineReducers } from 'redux';
import listingReducer from '../reducers/listing_reducer';
import BookingReducer from '../reducers/bookings_reducer';
import usersReducer from '../reducers/users_reducer';

export default combineReducers({
    listings: listingReducer,
    bookings: BookingReducer,
    users: usersReducer,
});
