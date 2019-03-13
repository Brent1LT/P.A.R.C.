import {
  RECEIVE_BOOKING,
  RECEIVE_ALL_USER_BOOKINGS,
  RECEIVE_ALL_LISTING_BOOKINGS,
  REMOVE_BOOKING
} from '../actions/booking_actions';
import { merge } from 'lodash';

const BookingReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_BOOKING:
      newState = merge({}, oldState, { [action.booking.id]: action.booking });
      return (newState);
    case RECEIVE_ALL_USER_BOOKINGS:
      return (action.bookings);
    case RECEIVE_ALL_LISTING_BOOKINGS:
      return (action.bookings);
    case REMOVE_BOOKING:
      newState = merge({}, oldState);
      delete newState[action.id];
      return (newState);
    default:
      return (oldState);
  }
};

export default BookingReducer;
