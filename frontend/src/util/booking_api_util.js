import axios from 'axios';

export const createBooking = (booking) => {
  return axios.post(`/api/bookings/new/`, booking);
};

export const fetchAllUserBookings = (user) => {
  return axios.get(`/api/bookings/user/${user.id}/`);
};

export const fetchAllListingBookings = (listing) => {
  return axios.get(`/api/bookings/listing/${listing.id}/`);
};

export const fetchBooking = (id) => {
  return axios.get(`/api/bookings/${id}/`);
};

export const deleteBooking = (id) => {
  return axios.delete(`/api/bookings/delete/${id}`);
};