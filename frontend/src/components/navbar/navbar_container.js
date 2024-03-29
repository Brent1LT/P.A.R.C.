import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {openModal} from '../../actions/modal_action';
import {logout} from '../../actions/session_actions';
import Navbar from './navbar';

const mapStateToProps = state => {
    return({
        loggedIn: state.session.isAuthenticated
    });
};

const mapDispatchToProps = dispatch => {
    return({
        openModal: (modal) => dispatch(openModal(modal)),
        logout: () => dispatch(logout())
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));