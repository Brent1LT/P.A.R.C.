import { connect } from 'react-redux';
import filterBookings from '../../actions/selectors';
import BookingForm from './booking_form';
import {
  createBooking,
  fetchAllListingBookings,
} from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.user,
    listing: ownProps.listing,
    bookings: filterBookings(state, ownProps.listing.id, 'listing'),
  });
};
const mapDispatchToProps = (dispatch) => {
  return ({
    createBooking: (booking) => dispatch(createBooking(booking)),
    fetchAllListingBookings: (listing) => dispatch(fetchAllListingBookings(listing)),
  });
};

const BookingFormContainer =
  connect(mapStateToProps, mapDispatchToProps)(BookingForm);
export default BookingFormContainer;
