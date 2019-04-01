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
      let obj = {};

      action.bookings.data.map(booking => {
        return obj[booking._id] = booking;
      });

      return (obj);
    case RECEIVE_ALL_LISTING_BOOKINGS:
      let object = {};

      action.bookings.data.map(booking => {
        return object[booking._id] = booking;
      });

      return (object);
    case REMOVE_BOOKING:
      newState = merge({}, oldState);
      delete newState[action.id];
      return (newState);
    default:
      return (oldState);
  }
};

export default BookingReducer;
