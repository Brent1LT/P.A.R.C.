import {connect} from 'react-redux'
import {createListing, createPhotoListing} from '../../actions/listing_action'
import ListingForm from './listing_form'

const mapStateToProps = ({errors}) => {
    return{
        errors: errors.listing
    };
};

const mapDispatchToProps = dispatch => {
    return({
        createListing: (listing) => dispatch(createListing(listing)),
        createPhotoListing: listing => dispatch(createPhotoListing(listing))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingForm);