import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { fetchListing } from '../../actions/listing_action';

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.listingId;
  let listing = state.entities.listings[id];
  return({
    listing,
  });
};
const mapDispatchToProps = dispatch => {
  return({
    fetchListing: (id) => dispatch(fetchListing(id)),
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);
