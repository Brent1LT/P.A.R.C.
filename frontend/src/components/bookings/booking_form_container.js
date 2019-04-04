import { connect } from 'react-redux';
import BookingForm from './booking_form';
import {
  createBooking,
  fetchAllListingBookings,
} from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.user,
    listing: ownProps.listing,
    bookings: state.entities.bookings,
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
