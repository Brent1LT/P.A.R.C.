import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchListings} from '../../actions/listing_action';
import { filterListings } from '../../actions/selectors';
import ListingIndex from './listing_index';

const mapStateToProps = state => {
  let filtered = filterListings(state);
  return({
    // listings: state.entities.listings,
    listings: filtered,
    search: state.ui.search
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchListings: () => dispatch(fetchListings()),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListingIndex));
