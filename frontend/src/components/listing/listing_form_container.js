import {connect} from 'react-redux';
import {createPhotoListing} from '../../actions/listing_action';
import ListingForm from './listing_form';

const mapStateToProps = (state) => {
    return{
        errors: state.errors.listing
    };
};

const mapDispatchToProps = dispatch => {
    return({
        createPhotoListing: listing => dispatch(createPhotoListing(listing))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingForm);