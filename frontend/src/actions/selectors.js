export const filterBookings = (state, id, type) => {
  let bookings = state.entities.bookings;
  let bookingsArray = Object.values(bookings);
  // do a map or filter here to grab the entries that match the id (user or listing)
  const result = bookingsArray.filter((booking) => booking[type].id === id);
  return result;
};