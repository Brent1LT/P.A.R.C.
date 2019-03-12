import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
// import NavBarContainer from './nav/navbar_container';
import ListingShowContainer from './listing/listing_show_container';
import ListingFormContainer from './listing/listing_form_container';
import MainPage from './main/main_page';
import NavBarContainer from './navbar/navbar_container'
import Modal from './modal'

const App = () => (
  <div>
    <Modal />
    <header>
      <Route to='/' component={NavBarContainer}/>
    </header>
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      {/* <ProtectedRoute exact path='/listings' component={ListingsPage} /> */}
      {/* <ProtectedRoute exact path="/listings/:listingId" component={ListingShowContainer} /> */}
      {/* <Route exact path="/listings/:listingId" component={ListingShowContainer} /> */}
      <Route exact path="/listings/new" component={ListingFormContainer} />
      {/* <ProtectedRoute exact path='/bookings' component={BookingsPage} /> */}
      {/* add components/routes here for login/signup modal? */}
    </Switch>
  </div>
);

export default App;
