import { connect } from 'react-redux';
import GoogleMapFinal from './map';
import { fetchListings } from '../../actions/listing_action';

const mapStateToProps = (state, ownProps) => {
  let listings = Object.values(state.entities.listings);
  return ({
    listings,
    style: ownProps.style,
    changeListing: ownProps.changeListing
  });
};
const mapDispatchToProps = (dispatch) => {
  return ({
    fetchAllListings: () => dispatch(fetchListings())
  });
};

const GoogleMapContainer =
  connect(mapStateToProps, mapDispatchToProps)(GoogleMapFinal);
export default GoogleMapContainer;
