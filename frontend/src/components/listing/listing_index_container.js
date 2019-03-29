import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchListings} from '../../actions/listing_action';
import { filterListings } from '../../actions/selectors';
import ListingIndex from './listing_index';

const mapStateToProps = state => {
  // filterListings(state)
  return({
    // listings: state.entities.listings,
    listings: state.entities.listings
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchListings: () => dispatch(fetchListings()),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListingIndex));
