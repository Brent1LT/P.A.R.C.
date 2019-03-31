import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../actions/modal_action';

// Passed in from parent component or from mapStateToProps
const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
        // Redirect to the tweets page if the user is authenticated
      <Redirect to="/" />
    )
  )} />
);

const Protected = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn ? (
        <Component {...props} />
      ) : (
        // Redirect to the login page if the user is already authenticated
        <Redirect to="/" />
      )
    }
  />
);

// Use the isAuthenitcated slice of state to determine whether a user is logged in

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal('login')),
  closeModal: () => dispatch(closeModal())
})

export const AuthRoute = withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, mapDispatchToProps)(Protected));
