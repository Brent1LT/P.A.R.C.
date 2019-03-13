import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
// import NavBarContainer from './nav/navbar_container';
import ListingIndexContainer from './listing/listing_index_container';
import ListingShowContainer from './listing/listing_show_container';
import ListingFormContainer from './listing/listing_form_container';
import MainPage from './main/main_page';
import NavBarContainer from './navbar/navbar_container'
import BookingIndexContainer from '../components/bookings/booking_index_container'
import Modal from './modal'
import OurInfo from './our_info'

const App = () => (
  <div>
    <Modal />
    <header>
      <Route to='/' component={NavBarContainer}/>
    </header>
    <Switch>
      <Route exact path='/listings' component={ListingIndexContainer} />
      {/* <ProtectedRoute exact path="/listings/:listingId" component={ListingShowContainer} /> */}
      <Route exact path="/listings/:listingId" component={ListingShowContainer} />
      <ProtectedRoute exact path="/listings/new" component={ListingFormContainer} />
      {/* <ProtectedRoute exact path='/bookings' component={BookingIndexContainer} /> */}
      {/* add components/routes here for login/signup modal? */}
      <Route exact path="/" component={MainPage} />
    </Switch>
      {/* <Route exact path='/' component={OurInfo} /> */}
    <footer>
      Copyright &copy; 2019 B.V.G.S.
    </footer>
  </div>
);

export default App;
