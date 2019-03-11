import { connect } from 'react-redux';
import GoogleMap from './map';

const mapStateToProps = (state) => {
  return ({
    listings: state.entities.listings,
  });
};
const mapDispatchToProps = (dispatch) => {
  return ({});
};

const GoogleMapContainer =
  connect(mapStateToProps, mapDispatchToProps)(GoogleMap);
export default GoogleMapContainer;
