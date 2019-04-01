import React from 'react';
import { ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import ListingIndexContainer from './listing/listing_index_container';
import ListingShowContainer from './listing/listing_show_container';
import ListingFormContainer from './listing/listing_form_container';
import MainPageContainer from './main/main_page_container';
import NavBarContainer from './navbar/navbar_container';
import BookingIndexContainer from '../components/bookings/booking_index_container';
import Modal from './modal';
import "react-dates/initialize";


const App = () => (
  <div>
    <Modal />
    <header>
      <Route to='/' component={NavBarContainer}/>
    </header>
    <Switch>
      <Route exact path='/listings' component={ListingIndexContainer} />
      <ProtectedRoute exact path="/listings/new" component={ListingFormContainer} />
      <Route exact path="/listings/:listingId" component={ListingShowContainer} />
      <ProtectedRoute exact path="/bookings/user/:userId" component={BookingIndexContainer} />
      <Route exact path="/" component={MainPageContainer} />
    </Switch>
    <footer>
      Copyright &copy; 2019 B.V.G.S.
    </footer>
  </div>
);

export default App;
