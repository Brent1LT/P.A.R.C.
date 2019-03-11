import * as BookingApiUtil from '../util/booking_api_util';

export const RECEIVE_BOOKING = `RECEIVE_BOOKING`;
export const RECEIVE_ALL_USER_BOOKINGS = `RECEIVE_ALL_USER_BOOKINGS`;
export const REMOVE_BOOKING = `REMOVE_BOOKING`;

/* ---------------------------------------------
// NORMAL ACTION CREATORS
--------------------------------------------- */
const receiveBooking = (booking) => {
  return ({
    type: RECEIVE_BOOKING,
    booking,
  });
};
const receiveAllUserBookings = (user) => {
  return ({
    type: RECEIVE_ALL_USER_BOOKINGS,
    user,
  });
};
const removeBooking = (id) => {
  return ({
    type: REMOVE_BOOKING,
    id,
  });
};

/* ---------------------------------------------
// THUNK ACTION CREATORS
--------------------------------------------- */
