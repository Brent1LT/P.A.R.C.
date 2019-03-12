import * as BookingApiUtil from '../util/booking_api_util';

export const RECEIVE_BOOKING = `RECEIVE_BOOKING`;
export const RECEIVE_ALL_USER_BOOKINGS = `RECEIVE_ALL_USER_BOOKINGS`;
export const RECEIVE_ALL_LISTING_BOOKINGS = `RECEIVE_ALL_LISTING_BOOKINGS`;
export const REMOVE_BOOKING = `REMOVE_BOOKING`;
export const RECEIVE_BOOKING_ERRORS = `RECEIVE_BOOKING_ERRORS`;
export const CLEAR_BOOKING_ERRORS = `CLEAR_BOOKING_ERRORS`;

/* ---------------------------------------------
// NORMAL ACTION CREATORS
--------------------------------------------- */
const receiveBooking = (booking) => {
  return ({
    type: RECEIVE_BOOKING,
    booking,
  });
};
const receiveAllUserBookings = (bookings) => {
  return ({
    type: RECEIVE_ALL_USER_BOOKINGS,
    bookings,
  });
};
const receiveAllListingBookings = (bookings) => {
  return ({
    type: RECEIVE_ALL_LISTING_BOOKINGS,
    bookings,
  });
};
const removeBooking = (id) => {
  return ({
    type: REMOVE_BOOKING,
    id,
  });
};
const receiveBookingErrors = (errors) => {
  return ({
    type: RECEIVE_BOOKING_ERRORS,
    errors,
  });
};
const clearBookingErrors = () => {
  return ({
    type: CLEAR_BOOKING_ERRORS,
  });
};

/* ---------------------------------------------
// THUNK ACTION CREATORS
--------------------------------------------- */
export const createBooking = (booking) => (dispatch) => {
  return (BookingApiUtil.createBooking(booking).then(
    (booking) => dispatch(receiveBooking(booking)),
    // (error) => dispatch(receiveBookingErrors(error.responseJSON)),
  ));
};
export const fetchAllUserBookings = (user) => (dispatch) => {
  return (BookingApiUtil.fetchAllUserBookings(user).then(
    (bookings) => dispatch(receiveAllUserBookings(bookings)),
    // (error) => dispatch(receiveBookingErrors(error.responseJSON)),
  ));
};
export const fetchAllListingBookings = (listing) => (dispatch) => {
  return (BookingApiUtil.fetchAllUserBookings(listing).then(
    (bookings) => dispatch(receiveAllListingBookings(bookings)),
    // (error) => dispatch(receiveBookingErrors(error.responseJSON)),
  ));
};
export const deleteBooking = (id) => (dispatch) => {
  return (BookingApiUtil.deleteBooking(id).then(
    (id) => dispatch(removeBooking(id)),
    // (error) => dispatch(receiveBookingErrors(error.responseJSON)),
  ));
};
