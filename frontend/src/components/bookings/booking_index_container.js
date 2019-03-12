import { connect } from 'react-redux';
import {filterBookings} from '../../actions/selectors';
import BookingIndex from './booking_index';
import {
  createBooking,
  fetchAllUserBookings,
  deleteBooking,
} from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.user,
    listing: ownProps.listing,
    bookings: filterBookings(state, state.session.user.id, 'user'),
  });
};
const mapDispatchToProps = (dispatch) => {
  return ({
    createBooking: (booking) => dispatch(createBooking(booking)),
    fetchAllUserBookings: () => dispatch(fetchAllUserBookings()),
    deleteBooking: (id) => dispatch(deleteBooking(id)),
  });
};

const BookingIndexContainer =
  connect(mapStateToProps, mapDispatchToProps)(BookingIndex);
export default BookingIndexContainer;
