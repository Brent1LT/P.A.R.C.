import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form'
import {Link} from 'react-router-dom'
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_action'

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    formType: 'Sign up',
    navLink: <Link to='/login' onClick={(e) => openModal('Log in')} >Log in?</Link>,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: user => dispatch(signup(user)),
    otherForm: (
      <Link to='/login' onClick={() => dispatch(openModal('login'))}>
        Log In
      </Link>
    ),
    closeModal: () => dispatch(closeModal()),
    // clearErrors: () => dispatch(clearErrors()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
