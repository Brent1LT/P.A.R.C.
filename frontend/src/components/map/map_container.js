import { connect } from 'react-redux';
import GoogleMap from './map';

const mapStateToProps = (state) => {
  return ({});
};
const mapDispatchToProps = (dispatch) => {
  return ({});
};

const GoogleMapContainer =
  connect(mapStateToProps, mapDispatchToProps)(GoogleMap);
export default GoogleMapContainer;
