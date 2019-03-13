import React from 'react';
import { fetchListings } from '../../actions/listing_action';
import SearchContainer from '../../components/navbar/search_container'
import GoogleMapContainer from '../map/map';
import NavbarContainer from  '../../components/navbar/navbar_container'

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // listings: null,
      listings: [
        {
          id: 1,
          user: 'Brent',
          description: 'Lorem ipsum stuffsum flotsam jetsam',
          lat: 37.762721,
          lng: -122.414530,
          street: '123 Broadway St.',
          city: 'SSF',
          state: 'CA',
          zip: 94105,
          price: 15,
        },
        {
          id: 2,
          user: 'Sam',
          description: 'Lorem ipsum stuffsum flotsam jetsam',
          lat: 37.756709,
          lng: -122.413692,
          street: '345 Bueller St.',
          city: 'SSF',
          state: 'CA',
          zip: 94105,
          price: 15,
        },
        {
          id: 3,
          user: 'Vishal',
          description: 'Lorem ipsum stuffsum flotsam jetsam',
          lat: 37.764281,
          lng: -122.427490,
          street: '678 Harrison St.',
          city: 'SSF',
          state: 'CA',
          zip: 94105,
          price: 15,
        },
      ],
    };
  };

  componentDidMount() {
    // this.setState({ listings: fetchListings() });
  };

  render() {
    if (this.state.listings === undefined) {
      return null;
      // can add a little loading screen here
    };

    return (
      <div>

        <GoogleMapContainer listings={this.state.listings} />
        <footer>
          Copyright &copy; 2019 B.V.G.S.
        </footer>
      </div>
    );
  }
}

export default MainPage;
