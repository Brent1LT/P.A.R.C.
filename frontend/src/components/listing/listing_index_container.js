import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchListings} from '../../actions/listing_action';
import ListingIndex from './listing_index';
import {newSearch} from '../../actions/search_actions';

const mapStateToProps = state => {
  return({
    listings: state.entities.listings,
    search: state.ui.search,
  });
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListings: () => dispatch(fetchListings()),
    newSearch: search_str => dispatch(newSearch(search_str))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListingIndex));
