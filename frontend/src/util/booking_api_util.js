import axios from 'axios';

export const createBooking = (booking) => {
  axios.post(`/api/bookings/new/`, booking);
};
export const fetchAllUserBookings = (user) => {
  axios.get(`/api/bookings/user/${user.id}/`);
};
export const fetchAllListingBookings = (listing) => {
  axios.get(`/api/bookings/listing/${listing.id}/`);
};
export const fetchBooking = (id) => {
  axios.get(`/api/bookings/${id}/`);
};
export const deleteBooking = (id) => {
  axios.delete(`/api/bookings/delete/${id}`);
};
