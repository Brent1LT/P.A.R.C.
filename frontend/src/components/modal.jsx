import React from 'react';
import {openModal, closeModal} from '../actions/modal_action';
import {connect} from 'react-redux';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';


// function Modal({ modal, closeModal})

const Modal = ({modal, closeModal}) => {
    if(!modal){
        return null;
    }

    let component;
    switch(modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return({
        modal: state.ui.modal
    })
}

const mapDispatchToProps = dispatch => {
    return({
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);