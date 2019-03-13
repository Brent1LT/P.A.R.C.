import React from 'react';
import axios from 'axios';
// import {geocodeRequest} from '../../actions/selectors'

class ListingForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      street: '',
      city: '',
      state: '',
      zip: '',
      lat: 0,
      lng: 0,
      description: '',
      price: 15,
      photo: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.geocodeRequest = this.geocodeRequest.bind(this);
  };

  geocodeRequest(address) {
    // let coordinates;
    return axios.get('https://maps.googleapis.com/maps/api/geocode/json',
      {params: {
        address: address,
        key: "AIzaSyAPjYkDq0-iiCd6W5-qCw46J-r0EW39L1U"
      }})
      .then((response) => { //response is the object the api returns
        //refer to this if you need help
        //https://developers.google.com/maps/documentation/geocoding/intro
        // console.log(response.data.results[0].geometry.location)
        return response.data.results[0].geometry.location;
        // debugger
        // return coordinates;
        //this is where we get an object with the results inside
        //response.data.results[0].
      })
      // debugger
    }

  handleSubmit(e){
    e.preventDefault();
    let address = `${this.state.street} ${this.state.city}, ${this.state.state}`
    console.log(this.geocodeRequest(address))
    this.geocodeRequest(address).then(response => {
      if (response !== undefined) {
        this.setState({
          lat: response.lat,
          lng: response.lng
        })
        let createdListing = Object.assign({}, this.state);
        this.props.createListing(createdListing);
      }
     }
    );
  };

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  };


  // renderErrors() {
  //   // return null;
  //   if (this.props.errors.length > 0) {
  //     return (
  //       <ul id="errors">
  //         {this.props.errors.map((error, i) => (
  //           <li key={`error-${i}`}>
  //             {error}
  //           </li>
  //         ))}
  //       </ul>
  //     );
  //   }
  // };

  render(){
    return(
      <div className='entire-listing-form'>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <h3>Address</h3>
          <div>Street: </div>
          <input type="text" value={this.state.street} onChange={this.update('street')}/>
          <div>City: </div>
          <input type="text" value={this.state.city} onChange={this.update('city')} />
          <div>State: </div>
          <input type="text" value={this.state.state} onChange={this.update('state')} />
          <div>Zip: </div>
          <input type="text" value={this.state.zip} onChange={this.update('zip')} />
          <div>Description: </div>
          <input type="text" value={this.state.description} onChange={this.update('description')}/>
          <div>Price: </div>
          <input type="text" value={this.state.price} />
          <br/>
          <div>Photo:</div>
          <input type="text" value={this.state.photo} onChange={this.update('photo')}/>
          <input type="submit"/>
        </form>
      </div>
    );
  };
};

export default ListingForm;
