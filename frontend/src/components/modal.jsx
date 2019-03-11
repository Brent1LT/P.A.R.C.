import React from 'react';
import {openModal, closeModal} from '../actions/modal_action';
import {connect} from 'react-redux';


function Modal({ modal, closeModal})

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
        <div onClick={closeModal}>
            <div  onClick={e => e.stopPropagation()}>
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
        openModal: () => dispatch(openModal())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);