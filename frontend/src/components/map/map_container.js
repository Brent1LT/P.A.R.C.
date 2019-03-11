import { connect } from 'react-redux';
import GoogleMapFinal from './map';

const mapStateToProps = (state) => {
  return ({
    listings: state.entities.listings,
  });
};
const mapDispatchToProps = (dispatch) => {
  return ({});
};

const GoogleMapContainer =
  connect(mapStateToProps, mapDispatchToProps)(GoogleMapFinal);
export default GoogleMapContainer;
