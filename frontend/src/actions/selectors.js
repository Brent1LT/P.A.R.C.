//THIS NEEDS TO BE IMPORTED TO LISTING INDEX CONTAINER AND MAP STATE TO PROPS pass in state
import axios from 'axios';



export const filterBookings = (state, id, type) => {
  let bookings = state.entities.bookings;
  let bookingsArray = Object.values(bookings);
  // do a map or filter here to grab the entries that match the id (user or listing)
  const result = bookingsArray.filter((booking) => booking[type].id === id);
  return result;
};


// export default filterListings;
