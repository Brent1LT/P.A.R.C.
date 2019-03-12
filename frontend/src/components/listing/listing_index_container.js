import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchListings} from '../../actions/listing_action';
import filterListings from '../../actions/selectors';
import ListingIndex from './listing_index';

const mapStateToProps = state => {
  return({
    listings: filterListings(state),
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchListings: () => dispatch(fetchListings()),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListingIndex));
