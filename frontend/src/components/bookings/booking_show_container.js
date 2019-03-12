import { connect } from 'react-redux';
import {
  fetchBooking,
  deleteBooking,
} from '../../actions/booking_actions';
import BookingShow from './booking_show';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.bookingId;
  const booking = state.entities.bookings[id];
  return ({
    id,
    booking,
    listing: ownProps.listing,
  });
};
const mapDispatchToProps = (dispatch) => {
  return ({
    fetchBooking: (id) => dispatch(fetchBooking(id)),
    deleteBooking: (id) => dispatch(deleteBooking(id)),
  });
};

const BookingShowContainer =
  connect(mapStateToProps, mapDispatchToProps)(BookingShow);
export default BookingShowContainer;
