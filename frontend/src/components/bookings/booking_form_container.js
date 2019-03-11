import { connect } from 'react-redux';
import BookingForm from './booking_form';
import {
  createBooking,
  // fetchAllUserBookings,
  deleteBooking,
} from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.user,
    listingId: ownProps.listingId,
    formType: 'Make a Booking',
  });
};
const mapDispatchToProps = (dispatch) => {
  return ({
    createBooking: (booking) => dispatch(createBooking(booking)),
    deleteBooking: (id) => dispatch(deleteBooking(id)),
  });
};

const BookingFormContainer =
  connect(mapStateToProps, mapDispatchToProps)(BookingForm);
export default BookingFormContainer;
