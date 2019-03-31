import { connect } from 'react-redux';
import {filterBookings} from '../../actions/selectors';
import BookingIndex from './booking_index';
import {
  createBooking,
  fetchAllUserBookings,
  deleteBooking,
} from '../../actions/booking_actions';
import { fetchListings } from '../../actions/listing_action';

const mapStateToProps = (state, ownProps) => {
  let bookings = Object.values(state.entities.bookings);
  return ({
    currentUser: state.session.user,
    listings: state.entities.listings,
    bookings
    // bookings: filterBookings(state, state.session.user.id, 'user'),
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createBooking: (booking) => dispatch(createBooking(booking)),
    fetchAllUserBookings: (user) => dispatch(fetchAllUserBookings(user)),
    fetchListings: () => dispatch(fetchListings()),
    deleteBooking: (id) => dispatch(deleteBooking(id)),
  });
};

const BookingIndexContainer =
  connect(mapStateToProps, mapDispatchToProps)(BookingIndex);
export default BookingIndexContainer;
