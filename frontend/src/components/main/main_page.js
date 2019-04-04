import React from 'react';
import SearchContainer from '../navbar/search_container';
import MapContainer from '../map/map_container';

class MainPage extends React.Component {
  componentDidMount() {
    this.props.fetchListings();
  }

  changeUrl(id){
    this.props.history.push(`/listings/${id}`);
  }

  render() {
    if (this.props.listings === undefined) {
      return null;
      // can add a little loading screen here
    }

    return (
      <div className="main-page">
        <div className="search-container">
          <div className="search-margin">
            <h2 className="search-title">Parking At Residential Communities</h2>
            <h4>Find a perfect spot near you!</h4>
            <div className="search-bar">
              <SearchContainer />
            </div>
          </div>
        </div>

        <div className="what-is">
          <div className="center-col">
            <h3 className="section-title">What is P.A.R.C?</h3>
            <div className="section-container">
              <img className="discovery" src="/assets/discover-parking.jpg" />
              <div className="discover-text">
                <h3>Discover</h3>
                <h4>Convenient</h4>
                <h3>Spaces</h3>
                <p>
                  Parc is an app where anyone with a private parking spot or
                  driveway can list it so another driver could park their car
                  there for a low flat rate.
                </p>
              </div>
            </div>
            <h3 className='section-title' >Get to know the team!</h3>
            <div className='team-container'>
              <div className='team-text'>
                <h3>Brent</h3>
                <h4>Gabe</h4>
                <h3>Sam</h3>
                <h4>Vishal</h4>
                <p>
                  We are a team of 4 developers that love to code and want
                  to provide a solution to the parking shortage that is happening
                  in cities. We hope to grow our idea and turn it into
                  something that can make a difference in the future.
                </p>
              </div>
              <div className='image-div'>
                <img className='team-photo' src="/assets/the-team.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;

{/* <GoogleMapContainer changeUrl={this.changeUrl.bind(this)} listings={this.props.listings} /> */}
  {/* <h2 className='home-title'>Parking At Residential Communities</h2>
  <div className='main-description'>
      <h3 className='mini-titles'>What does P.A.R.C do?</h3>
      <p>
        Parc is an app where anyone with a private
        parking spot or driveway can list it so some other
        driver could park their car there for a low flat rate. Our
        main goal is to provide users with a simple way to earn some
        extra cash on the side.
      </p>
    <div className='description-content for-left'>
      <h3 className='mini-titles'>Who are we?</h3>
      <p>
        We are a team of 4 developers that love to code and want
        to provide a solution to the parking shortage that is happening
        in cities. We hope to grow our idea and turn it into
        something that can make a difference in the future.
      </p>
    </div>
</div> */}
