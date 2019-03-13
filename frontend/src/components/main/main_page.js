import React from 'react';
import SearchContainer from '../../components/navbar/search_container'
import GoogleMapContainer from '../map/map';
import NavbarContainer from  '../../components/navbar/navbar_container'

class MainPage extends React.Component {
  render() {
    return (
      <div>
        
        {/* <SearchContainer /> */}
        {/* <NavbarContainer /> */}
        <GoogleMapContainer />
        <footer>
          Copyright &copy; 2019 B.V.G.S.
        </footer>
      </div>
    );
  }
}

export default MainPage;
