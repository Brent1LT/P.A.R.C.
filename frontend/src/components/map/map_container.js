import { connect } from 'react-redux';
import GoogleMapFinal from './map';
<<<<<<< HEAD

const mapStateToProps = (state, ownProps) => {
  return ({
    listings: ownProps.listings,
=======
import { fetchListings } from '../../actions/listing_action';

const mapStateToProps = (state, ownProps) => {
  let listings = Object.values(state.entities.listings);
  return ({
    listings,
>>>>>>> 1f0dbbb0e76963af6f1e0b73fb29429cd75b322c
    style: ownProps.style,
  });
};
const mapDispatchToProps = (dispatch) => {
<<<<<<< HEAD
  return ({});
=======
  return ({
    fetchAllListings: () => dispatch(fetchListings())
  });
>>>>>>> 1f0dbbb0e76963af6f1e0b73fb29429cd75b322c
};

const GoogleMapContainer =
  connect(mapStateToProps, mapDispatchToProps)(GoogleMapFinal);
export default GoogleMapContainer;
