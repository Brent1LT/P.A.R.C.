import { connect } from 'react-redux';
import ParcMap from './map';
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

const MapContainer =
  connect(mapStateToProps, mapDispatchToProps)(ParcMap);
export default MapContainer;
