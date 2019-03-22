import React from 'react';
import SearchContainer from '../../components/navbar/search_container';
import GoogleMapContainer from '../map/map_container';
import NavbarContainer from  '../../components/navbar/navbar_container';

class MainPage extends React.Component {
  componentDidMount() {
    this.props.fetchListings();
  }

  render() {
    if (this.props.listings === undefined) {
      return null;
      // can add a little loading screen here
    }

    return (
      <div className='map-and-info'>
        <GoogleMapContainer listings={this.props.listings} />
        <br/>
        <div className='our-description'>
          <h2 className='home-title'>What is P.a.r.c.</h2>
          <div className='main-description'>
            <div className='description-content for-right'>
              <h3 className='mini-titles'>What does p.a.r.c do?</h3>
              <p>
                P.a.r.c. stands for Parking At Residential Communities.
                What is parc? Parc is an app where anyone with a private
                parking spot or driveway can list it so some other
                driver could park their car there for a low flat rate. Our
                main goal is to provide users with a simple way to earn some
                extra cash on the side. We also want to provide drivers with
                an easy way to find cheap parking spots that can last more
                than just the normal 2 hours.
              </p>
            </div>
            <div className='description-content for-left'>
              <h3 className='mini-titles'>Who are we?</h3>
              <p>
                We are a team of 4 developers that love to code and want
                to provide a solution to the parking shortage that is happening
                in cities. We hope to grow our idea and turn it into
                something that can make a difference in the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
