import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import {Link} from 'react-router-dom';
import React from 'react';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_action';

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    formType: 'Sign up',
    navLink: <Link to='/login' onClick={(e) => openModal('login')} >Log in?</Link>,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: user => dispatch(signup(user)),
    otherForm: (
      <button className='switch-form' onClick={() => dispatch(openModal('login'))}>
        Log in
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    login: user => dispatch(login(user)),
    // clearErrors: () => dispatch(clearErrors()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
