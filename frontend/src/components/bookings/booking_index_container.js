import { connect } from 'react-redux';
import BookingIndex from './booking_index';
import {withRouter} from 'react-router-dom'
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingIndex));