import { connect } from 'react-redux';
import MainPage from './main_page';
import { fetchListings } from '../../actions/listing_action';

const mapStateToProps = (state) => {
  return ({
    listings: state.entities.listings,
  });
};
const mapDispatchToProps = (dispatch) => {
  return ({
    fetchListings: () => dispatch(fetchListings()),
  });
};

const MainPageContainer =
  connect(mapStateToProps, mapDispatchToProps)(MainPage);
export default MainPageContainer;
