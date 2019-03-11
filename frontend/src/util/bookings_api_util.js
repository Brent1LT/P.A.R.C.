import axios from 'axios';

// create
// index
  // /api/bookings/user/:user_id/
// delete

export const createBooking = (booking) => {
  axios.post(`/api/bookings/new/`, booking);
};
export const fetchAllUserBookings = (user) => {
  axios.get(`/api/bookings/user/${user.id}/`);
};
export const deleteBooking = (id) => {
  axios.delete(`/api/bookings/delete/${id}`);
};
