import React from 'react'
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            password2: "",
            firstname: "",
            lastname: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeModal = this.changeModal.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => {
            this.props.closeModal();
        });
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    renderErrors() {
        if (this.props.errors.length > 0) {
            return (
                <ul id="errors">
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            );
        }
    }

    signupCheck(formType) {
        if (formType === 'Sign up') {
            return (
                <div className='signup-form'>
                    <br />
                    <br />
                    <h2 className='signup-continue'>Sign up to continue</h2>
                    <input id='text-box' type="text" placeholder="First name" value={this.state.firstname} onChange={this.update('firstname')} />
                    <br />
                    <input id='text-box' type="text" placeholder="Last name" value={this.state.lastname} onChange={this.update('lastname')} />
                    <br />
                    <input id='text-box' type="text" placeholder="Email Address" value={this.state.email} onChange={this.update('email')} />
                    <br />
                    <input id='text-box' type="password" placeholder="Password" value={this.state.password} onChange={this.update('password')} />
                    <br />
                    <input id='text-box' type="password" placeholder="Re-enter Password" value={this.state.password2} onChange={this.update('password2')} />
                </div>
            );
        }
        else {
            return (
                <div className='log-form'>
                    <h2 className='signup-continue' >Log in to continue</h2>
                    <input id='text-box' type="text" placeholder="Email Address" value={this.state.email} onChange={this.update('email')} />
                    <br />
                    <input id='text-box' type="password" placeholder="Password" value={this.state.password} onChange={this.update('password')} />
                </div>
            )
        }
    }

    componentWillUnmount() {
        // this.props.clearErrors();
    }


    changeModal() {
        if (this.props.formType === 'Sign up') {
            return (<Link to="/login" onClick={(e) => this.props.otherForm('signup')}>Log in</Link>)
        } else {
            return (<Link to="/signup" onClick={(e) => this.props.otherForm('login')}>Sign up</Link>)
        }
    }

    demoLogin(e) {
        e.preventDefault();
        const user = {
          email: 'ilovebananas@cheese.com',
          password: 'thisisAfuckingPassword1'
        };
        this.props.login(user).then(this.props.closeModal);
    }

    render() {
        let message = ''
        if (this.props.formType === 'Sign up') {
            message = "Already have an account? ";
        } else {
            message = "Dont have an account yet? "
        }

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} >
                    <div className='close-modal-x' onClick={this.props.closeModal}>x</div>
                    <div className="login-form">
                        {this.signupCheck(this.props.formType)}
                        <div>
                        <button id="session-submit" type="submit" >{this.props.formType}</button>
                        </div>
                        <div className="demo-login">
                            <button className="demo-button" onClick={this.demoLogin}>
                                Demo Login
                            </button>
                        </div>
                        <div className='change-forms'>
                            {message}
                        </div>
                        {this.props.otherForm}
                        {/* {this.renderErrors()} */}
                    </div>
                </form>
            </div>

        );
    }
}

export default withRouter(SessionForm);