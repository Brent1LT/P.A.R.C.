import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import {newSearch} from '../../actions/search_actions'
import Search from './search'


const mapStateToProps = state => {
    return({
        // listings: state.entities.listings  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    });
};

const mapDispatchToProps = dispatch => {
    return({
        // fetchListings: () => dispatch(fetchListings()),      <<<<<<<<<<<<<<<<<<<<<<<<<<<
        newSearch: (search_str) => dispatch(newSearch(search_str))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));