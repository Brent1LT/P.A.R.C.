import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_action';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Log in',
    navLink: <Link to='/signup' onClick={(e) => openModal('signup')} >Sign up?</Link>
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: user => dispatch(login(user)),
    login: user => dispatch(login(user)),
    otherForm: (
      <button className='switch-form' onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
