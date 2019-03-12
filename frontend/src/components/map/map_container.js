import { connect } from 'react-redux';
import GoogleMapFinal from './map';

const mapStateToProps = (state, ownProps) => {
  return ({
    listings: ownProps.listings,
    style: ownProps.style,
  });
};
const mapDispatchToProps = (dispatch) => {
  return ({});
};

const GoogleMapContainer =
  connect(mapStateToProps, mapDispatchToProps)(GoogleMapFinal);
export default GoogleMapContainer;
